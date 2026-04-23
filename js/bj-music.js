// assets/js/background-music.js
// 清补凉H5背景音乐管理器 - 支持跨页面连续播放（每个页面独立引入，通过localStorage续播）
(function() {
    // ========== 配置 ==========
    const MUSIC_URL = "../assets/images/背景音乐.mp3";   // 请确保路径正确
    const VOLUME = 0.5;
    const LOOP = true;
    const STORAGE_KEY = 'bg_music_state';

    // ========== 全局变量 ==========
    let bgAudio = null;
    let isMusicEnabled = true;       // 用户是否开启音乐
    let videoCount = 0;              // 正在播放的视频数量
    let hasUserInteracted = false;   // 当前页面是否已有用户点击
    let controlBtn = null;
    let pendingResumeTime = 0;       // 待恢复的播放进度（秒）
    let needResume = false;          // 是否需要恢复播放

    // ========== 辅助函数 ==========
    // 读取存储的状态
    function loadStoredState() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                const state = JSON.parse(stored);
                if (typeof state.isMusicEnabled === 'boolean') {
                    isMusicEnabled = state.isMusicEnabled;
                }
                if (typeof state.currentTime === 'number' && state.currentTime > 0) {
                    pendingResumeTime = state.currentTime;
                    needResume = (state.wasPlaying === true) && isMusicEnabled;
                    console.log(`[背景音乐] 读取存储: time=${pendingResumeTime}, needResume=${needResume}`);
                }
            }
        } catch(e) { console.warn(e); }
    }

    // 保存当前状态到localStorage
    function saveCurrentState() {
        if (!bgAudio) return;
        try {
            const state = {
                isMusicEnabled: isMusicEnabled,
                currentTime: bgAudio.currentTime || 0,
                wasPlaying: isMusicEnabled && videoCount === 0 && !bgAudio.paused,
                timestamp: Date.now()
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch(e) {}
    }

    // 尝试播放音乐（受浏览器自动播放策略限制）
    function tryPlayMusic() {
        if (!bgAudio || !isMusicEnabled) return;
        if (videoCount > 0) {
            console.log('[背景音乐] 视频播放中，暂不播放音乐');
            return;
        }
        bgAudio.play().then(() => {
            console.log('[背景音乐] 播放成功');
            updateButtonIcon(true);
            needResume = false; // 已恢复，清除标志
        }).catch(err => {
            console.log('[背景音乐] 播放被阻止，需要用户交互', err);
            updateButtonIcon(false);
            if (needResume && !hasUserInteracted) {
                showResumeTip();
            }
        });
    }

    function pauseMusic() {
        if (bgAudio && !bgAudio.paused) {
            bgAudio.pause();
            updateButtonIcon(false);
        }
    }

    function updateButtonIcon(isPlaying) {
        if (!controlBtn) return;
        const icon = controlBtn.querySelector('i');
        if (icon) {
            icon.className = isPlaying ? 'fas fa-music' : 'fas fa-volume-mute';
            controlBtn.style.opacity = isPlaying ? '1' : '0.7';
        }
        if (videoCount > 0) {
            controlBtn.style.opacity = '0.5';
            controlBtn.style.cursor = 'not-allowed';
        } else {
            controlBtn.style.cursor = 'pointer';
        }
    }

    function refreshMusicState() {
        if (!bgAudio) return;
        if (videoCount > 0) {
            if (!bgAudio.paused) pauseMusic();
        } else {
            if (isMusicEnabled) {
                if (bgAudio.paused && hasUserInteracted) {
                    tryPlayMusic();
                }
            } else {
                if (!bgAudio.paused) pauseMusic();
            }
        }
    }

    // 显示恢复播放的友好提示
    function showResumeTip() {
        const tip = document.createElement('div');
        tip.textContent = '🎵 点击任意位置，继续播放背景音乐';
        tip.style.cssText = `
            position: fixed; bottom: 100px; left: 50%; transform: translateX(-50%);
            background: rgba(0,0,0,0.7); color: #ffd966; padding: 8px 20px;
            border-radius: 30px; font-size: 14px; z-index: 10001;
            backdrop-filter: blur(8px); white-space: nowrap;
            animation: fadeOut 3s ease forwards;
        `;
        const style = document.createElement('style');
        style.textContent = `@keyframes fadeOut { 0% { opacity: 1; } 70% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }`;
        document.head.appendChild(style);
        document.body.appendChild(tip);
        setTimeout(() => { tip.remove(); style.remove(); }, 3000);
    }

    // ========== 视频监听 ==========
    function bindVideoEvents() {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            if (video.dataset.musicManaged === 'true') return;
            video.dataset.musicManaged = 'true';
            const onPlay = () => {
                videoCount++;
                if (videoCount === 1 && bgAudio && !bgAudio.paused) pauseMusic();
                refreshMusicState();
            };
            const onPause = () => { videoCount = Math.max(0, videoCount-1); refreshMusicState(); };
            const onEnded = () => { videoCount = Math.max(0, videoCount-1); refreshMusicState(); };
            video.addEventListener('play', onPlay);
            video.addEventListener('pause', onPause);
            video.addEventListener('ended', onEnded);
            if (!video.paused && video.currentTime > 0 && video.readyState >= 2) {
                videoCount++;
                refreshMusicState();
            }
        });
    }

    function observeNewVideos() {
        const observer = new MutationObserver(() => {
            if (document.querySelectorAll('video').length) bindVideoEvents();
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    // ========== UI 按钮 ==========
    function createControlButton() {
        if (controlBtn) return;
        const btn = document.createElement('div');
        btn.innerHTML = '<i class="fas fa-music"></i>';
        btn.style.cssText = `
            position: fixed; top: 10px; right: 10px; width: 44px; height: 44px;
            border-radius: 50%; background: rgba(139,69,19,0.85); backdrop-filter: blur(4px);
            color: white; display: flex; align-items: center; justify-content: center;
            cursor: pointer; z-index: 9999; font-size: 20px; border: 1px solid rgba(255,255,255,0.3);
        `;
        btn.title = '背景音乐开关';
        btn.onclick = (e) => {
            e.stopPropagation();
            if (videoCount > 0) {
                const tip = document.createElement('div');
                tip.textContent = '视频播放中，请先关闭视频';
                tip.style.cssText = 'position:fixed;bottom:140px;right:70px;background:rgba(0,0,0,0.7);color:#fff;padding:4px 12px;border-radius:20px;font-size:12px;z-index:10000;';
                document.body.appendChild(tip);
                setTimeout(() => tip.remove(), 1500);
                return;
            }
            isMusicEnabled = !isMusicEnabled;
            if (isMusicEnabled) {
                if (hasUserInteracted) tryPlayMusic();
            } else {
                pauseMusic();
            }
            refreshMusicState();
        };
        document.body.appendChild(btn);
        controlBtn = btn;
        updateButtonIcon(false);
    }

    // ========== 首次用户交互处理（用于恢复播放） ==========
    function onUserInteraction() {
        if (hasUserInteracted) return;
        hasUserInteracted = true;
        console.log('[背景音乐] 用户已交互，尝试恢复音乐');
        if (needResume && pendingResumeTime > 0 && bgAudio) {
            // 设置进度（需要确保音频已加载元数据）
            if (bgAudio.readyState >= 1) {
                bgAudio.currentTime = pendingResumeTime;
            } else {
                bgAudio.addEventListener('loadedmetadata', () => {
                    bgAudio.currentTime = pendingResumeTime;
                }, { once: true });
            }
        }
        if (isMusicEnabled && videoCount === 0) {
            tryPlayMusic();
        }
        // 移除监听
        ['click', 'touchstart', 'keydown'].forEach(ev => document.removeEventListener(ev, onUserInteraction));
    }

    // ========== 初始化 ==========
    function init() {
        if (window.__bgMusicInitialized) return; // 防止同页面重复初始化
        window.__bgMusicInitialized = true;

        loadStoredState();

        bgAudio = new Audio();
        bgAudio.src = MUSIC_URL;
        bgAudio.loop = LOOP;
        bgAudio.volume = VOLUME;
        bgAudio.preload = 'auto';

        bgAudio.addEventListener('error', () => console.error('[背景音乐] 音频加载失败:', MUSIC_URL));

        createControlButton();
        setTimeout(() => {
            bindVideoEvents();
            observeNewVideos();
        }, 200);

        // 页面卸载前保存状态
        window.addEventListener('beforeunload', () => saveCurrentState());
        // 监听SPA路由变化
        const wrapHistory = (method) => {
            const original = history[method];
            return function() {
                const result = original.apply(this, arguments);
                setTimeout(() => saveCurrentState(), 50);
                return result;
            };
        };
        history.pushState = wrapHistory('pushState');
        history.replaceState = wrapHistory('replaceState');
        window.addEventListener('popstate', () => setTimeout(saveCurrentState, 50));

        // 自动播放策略：等待用户首次交互
        document.addEventListener('click', onUserInteraction);
        document.addEventListener('touchstart', onUserInteraction);
        document.addEventListener('keydown', onUserInteraction);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();