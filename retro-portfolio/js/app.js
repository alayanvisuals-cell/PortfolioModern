// ============================================
// Windows 98 Portfolio — Application Script
// ============================================

(function () {
    'use strict';

    // --- Portfolio Data (with subfolders) ---
    const portfolioData = {
        commercial: {
            motion_graphics: [
                { id: 1, title: 'Burgerizz Explosion', video: '1PimOAjR4-kz9H3aF9uzhFo9FqWSTsisN', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23008080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E🎨 Brand%3C/text%3E%3C/svg%3E" },
                { id: 2, title: 'Unleashed AOT', video: '1WmQrdrLzFISa7pKW0gl9sNMyKjH-94F2', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23000080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E📦 Product%3C/text%3E%3C/svg%3E" },
                { id: 3, title: 'Unleashed Porsche', video: '1f7GEwJjQ7VPZr4Xr_1ZkQw_tMpSN-DnU', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23000080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E📦 Product%3C/text%3E%3C/svg%3E" },
                { id: 4, title: 'Broode Outro', video: '1bvIhfdDcC23E15SACIO8v3LDXjyI0XOK', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23008080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E📢 Promo%3C/text%3E%3C/svg%3E" },
                { id: 5, title: 'Signetch Wrap', video: '15wPMncbwD4xLdsWUqqEmlY5-3C_cVSx4', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23008080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E📢 Promo%3C/text%3E%3C/svg%3E" },
                { id: 6, title: 'Solidarity Airplane', video: '19gJF_RDFBeSz2yzltGsRFgjDfZKdcMZZ', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23008080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E📢 Promo%3C/text%3E%3C/svg%3E" },
                { id: 7, title: 'Burgerizz X-O', video: '1vqsJd75H_lZbWyLhFS2t4oudxjCX1nkA', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23008080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E📢 Promo%3C/text%3E%3C/svg%3E" },
                { id: 8, title: 'Saudi Station', video: '1x6jXkWc_dVkVScxwY5vz0SRBO4SdvmAh', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23008080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E📢 Promo%3C/text%3E%3C/svg%3E" }
            ],
            reels: [
                { id: 9, title: 'TH3ABEEN', video: '1MjN1eC8jyLKqKTvpHhNZwqvrlD6BgB-2', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23008080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E🎨 Brand%3C/text%3E%3C/svg%3E" },
                { id: 10, title: 'PEARL CLINIC', video: '127mbArPw8m2b8QHVbeerj5c7kHJ7e_dR', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23000080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E📦 Product%3C/text%3E%3C/svg%3E" }
            ]
        },
        passion: {
            motion_graphics: [
                { id: 11, title: '2025 Showreeel', video: '16mcL3GFYQT9CBO4GILre_vOIRfv7hfHV', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23008080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E✨ Abstract%3C/text%3E%3C/svg%3E" },
                { id: 12, title: 'Youmein Ou Leila', video: '1Dg45w7wy82SB-RweRLsjKmuZj2nVIMeR', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23000080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E🎵 Music%3C/text%3E%3C/svg%3E" },
                { id: 13, title: 'Al-Quds Visual', video: '1-QcLxYmv4rsC8J6gGgc-Zjqy5t_KoDYX', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23008080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E🎬 Loop%3C/text%3E%3C/svg%3E" },
                { id: 14, title: '03', video: '1nYMcheV4gIuujXVvjVC_bxI_NpQGTWqN', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23008080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E🎬 Loop%3C/text%3E%3C/svg%3E" },
                { id: 15, title: 'Batman Monolouge', video: '15QTVzvMa0IolOdLGboTZqpEgwl4XXx5d', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23008080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E🎬 Loop%3C/text%3E%3C/svg%3E" },
                { id: 16, title: 'Falling Visual', video: '10KPW8bL_xoOJOc2UBvVTyYQO1xcKj7va', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23008080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E🎬 Loop%3C/text%3E%3C/svg%3E" }
            ],
            reels: [
                { id: 17, title: 'Daye3', video: '1eYghGKJ9OC_7tVHJZkvaXRlbeJfc3TUu', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23008080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E🎬 Loop%3C/text%3E%3C/svg%3E" },
                { id: 18, title: 'Gang Edit', video: '1PiijvcA-0R4RE2XbGLFr0tKrsFoH8Fdt', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23000080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E🎥 Film%3C/text%3E%3C/svg%3E" },
                { id: 19, title: 'ABDO X ALAYAN', video: '1qm8PodOzYxUePyZYBfkg3MsGEHKruq-o', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23008080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E✨ Abstract%3C/text%3E%3C/svg%3E" },
                { id: 20, title: 'Franchise (Alayan X Ahmad Mansour)', video: '1Lswg2skoDPmJUy9cqpBJOnoU3ijM7Pw5', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23000080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E🎵 Music%3C/text%3E%3C/svg%3E" },
                { id: 21, title: 'Yasser AL-Huzaimy', video: '1rYc4Ojx0-M3JSOZ8qbGdvgJ9XPrSMQCu', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3E%3Crect fill='%23008080' width='200' height='120'/%3E%3Ctext x='50%25' y='50%25' font-size='20' fill='white' text-anchor='middle' dominant-baseline='middle'%3E🎬 Loop%3C/text%3E%3C/svg%3E" }
            ],

        }
    };

    // --- State ---
    let windowZIndex = 10;
    let draggedElement = null;
    let dragOffset = { x: 0, y: 0 };
    let isResizing = false;
    let resizeStart = { x: 0, y: 0, width: 0, height: 0 };
    let resizeTarget = null;
    let windowStates = {};
    let startMenuOpen = false;

    function isMobile() {
        return window.innerWidth <= 480;
    }

    // --- Sound Effects ---
    let audioCtx = null;

    function getAudioContext() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        return audioCtx;
    }

    function playSound(frequency, duration) {
        try {
            const ctx = getAudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.value = frequency;
            osc.type = 'square'; // Win98 beep style
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + duration);
        } catch (e) {
            // Audio not available
        }
    }

    // --- Clock ---
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const clockEl = document.getElementById('tray-clock');
        if (clockEl) clockEl.textContent = hours + ':' + minutes;
    }

    // --- Start Menu ---
    function toggleStartMenu() {
        const menu = document.getElementById('start-menu');
        const btn = document.getElementById('start-button');
        startMenuOpen = !startMenuOpen;
        menu.classList.toggle('active', startMenuOpen);
        btn.classList.toggle('active', startMenuOpen);
        if (startMenuOpen) {
            playSound(600, 0.05);
        }
    }

    function closeStartMenu() {
        const menu = document.getElementById('start-menu');
        const btn = document.getElementById('start-button');
        startMenuOpen = false;
        menu.classList.remove('active');
        btn.classList.remove('active');
    }

    // --- Window Management ---
    function openWindow(windowId) {
        closeStartMenu();
        const win = document.getElementById('window-' + windowId);
        if (!win) return;

        win.classList.remove('minimized');
        win.classList.add('active');
        bringToFront(win);

        // Position window if not yet positioned
        if (!isMobile() && !win.dataset.positioned) {
            const offsetMap = { about: 0, commercial: 1, passion: 2 };
            const idx = offsetMap[windowId] || 0;
            win.style.top = (60 + idx * 40) + 'px';
            win.style.left = (140 + idx * 40) + 'px';
            win.style.width = '600px';
            win.style.height = '480px';
            win.dataset.positioned = 'true';
        }

        updateTaskbarButtons();
        playSound(440, 0.05);
    }

    function closeWindow(windowId) {
        const win = document.getElementById('window-' + windowId);
        if (!win) return;
        win.classList.remove('active');
        win.classList.remove('minimized');
        delete windowStates[windowId];
        updateTaskbarButtons();
        playSound(350, 0.04);
    }

    function minimizeWindow(windowId) {
        const win = document.getElementById('window-' + windowId);
        if (!win) return;
        win.classList.add('minimized');
        updateTaskbarButtons();
        playSound(330, 0.04);
    }

    function maximizeWindow(windowId) {
        const win = document.getElementById('window-' + windowId);
        if (!win) return;

        if (!windowStates[windowId]) {
            windowStates[windowId] = {
                top: win.style.top,
                left: win.style.left,
                width: win.style.width,
                height: win.style.height
            };
            win.style.top = '0px';
            win.style.left = '0px';
            win.style.width = '100vw';
            win.style.height = 'calc(100vh - ' + getComputedStyle(document.documentElement).getPropertyValue('--win-taskbar-height') + ')';
        } else {
            win.style.top = windowStates[windowId].top;
            win.style.left = windowStates[windowId].left;
            win.style.width = windowStates[windowId].width;
            win.style.height = windowStates[windowId].height;
            delete windowStates[windowId];
        }
        playSound(523, 0.05);
    }

    function bringToFront(element) {
        windowZIndex++;
        element.style.zIndex = windowZIndex;

        // Mark all windows as inactive, then mark the clicked one as active
        document.querySelectorAll('.window').forEach(w => w.classList.add('inactive'));
        element.classList.remove('inactive');
    }

    // --- Taskbar Buttons ---
    function updateTaskbarButtons() {
        const container = document.getElementById('taskbar-windows');
        if (!container) return;
        container.innerHTML = '';

        const windowConfigs = [
            { id: 'showreel', icon: '📺', title: 'Showreel' },
            { id: 'about', icon: '👤', title: 'About Me' },
            { id: 'commercial', icon: '🎬', title: 'Commercial Work' },
            { id: 'passion', icon: '✨', title: 'Passion Projects' }
        ];

        windowConfigs.forEach(cfg => {
            const win = document.getElementById('window-' + cfg.id);
            if (!win || !win.classList.contains('active')) return;

            const btn = document.createElement('button');
            btn.className = 'taskbar-window-btn';
            if (!win.classList.contains('minimized')) {
                btn.classList.add('active');
            }
            btn.innerHTML = '<span class="taskbar-btn-icon">' + cfg.icon + '</span><span class="taskbar-btn-text">' + cfg.title + '</span>';
            btn.addEventListener('click', function () {
                if (win.classList.contains('minimized')) {
                    win.classList.remove('minimized');
                    bringToFront(win);
                } else {
                    minimizeWindow(cfg.id);
                }
                updateTaskbarButtons();
            });
            container.appendChild(btn);
        });
    }

    // --- Dragging ---
    function setupDragging() {
        document.addEventListener('mousemove', function (e) {
            if (isResizing && resizeTarget) {
                const deltaX = e.clientX - resizeStart.x;
                const deltaY = e.clientY - resizeStart.y;
                resizeTarget.style.width = Math.max(320, resizeStart.width + deltaX) + 'px';
                resizeTarget.style.height = Math.max(240, resizeStart.height + deltaY) + 'px';
            } else if (draggedElement) {
                draggedElement.style.left = (e.clientX - dragOffset.x) + 'px';
                draggedElement.style.top = (e.clientY - dragOffset.y) + 'px';
            }
        });

        document.addEventListener('mouseup', function () {
            draggedElement = null;
            isResizing = false;
            resizeTarget = null;
        });
    }

    function makeWindowDraggable(win) {
        const header = win.querySelector('.window-header');
        if (!header) return;

        header.addEventListener('mousedown', function (e) {
            if (isMobile()) return;
            if (e.target.closest('.win-btn')) return;

            draggedElement = win;
            dragOffset.x = e.clientX - win.offsetLeft;
            dragOffset.y = e.clientY - win.offsetTop;
            bringToFront(win);
            updateTaskbarButtons();
        });
    }

    function setupWindowResize(win) {
        const handle = win.querySelector('.window-resize-handle');
        if (!handle) return;

        handle.addEventListener('mousedown', function (e) {
            if (isMobile()) return;
            isResizing = true;
            resizeTarget = win;
            resizeStart.x = e.clientX;
            resizeStart.y = e.clientY;
            resizeStart.width = win.offsetWidth;
            resizeStart.height = win.offsetHeight;
            e.preventDefault();
        });
    }

    // --- Folder Navigation ---
    // Show the two subfolders (Motion Graphics, Reels) inside a window
    function showFolders(category) {
        const container = document.getElementById(category + '-content');
        if (!container) return;

        container.innerHTML = '';

        // Address bar
        const addressBar = document.createElement('div');
        addressBar.className = 'address-bar';
        addressBar.innerHTML = '<span class="address-label">Address:</span>' +
            '<span class="address-path">C:\\Portfolio\\' + (category === 'commercial' ? 'Commercial Work' : 'Passion Projects') + '</span>';
        container.appendChild(addressBar);

        // Folder icons container
        const folderGrid = document.createElement('div');
        folderGrid.className = 'folder-grid';

        // Motion Graphics folder
        var mgFolder = createFolderIcon('Motion Graphics', function () {
            showSubfolderContents(category, 'motion_graphics', 'Motion Graphics');
            playSound(440, 0.05);
        });
        folderGrid.appendChild(mgFolder);

        // Reels folder
        var reelsFolder = createFolderIcon('Reels', function () {
            showSubfolderContents(category, 'reels', 'Reels');
            playSound(440, 0.05);
        });
        folderGrid.appendChild(reelsFolder);

        container.appendChild(folderGrid);

        // Update status bar
        var statusbar = document.querySelector('#window-' + category + ' .statusbar-section');
        if (statusbar) statusbar.textContent = '2 folders';
    }

    // Show the video thumbnails inside a subfolder, with a back button
    function showSubfolderContents(category, subfolder, subfolderName) {
        const container = document.getElementById(category + '-content');
        if (!container) return;

        const items = portfolioData[category][subfolder] || [];
        container.innerHTML = '';

        // Address bar
        const addressBar = document.createElement('div');
        addressBar.className = 'address-bar';
        var parentName = category === 'commercial' ? 'Commercial Work' : 'Passion Projects';
        addressBar.innerHTML = '<span class="address-label">Address:</span>' +
            '<span class="address-path">C:\\Portfolio\\' + parentName + '\\' + subfolderName + '</span>';
        container.appendChild(addressBar);

        // Toolbar with back button
        var toolbar = document.createElement('div');
        toolbar.className = 'folder-toolbar';
        var backBtn = document.createElement('button');
        backBtn.className = 'toolbar-btn';
        backBtn.innerHTML = '⬅ Back';
        backBtn.addEventListener('click', function () {
            showFolders(category);
            playSound(350, 0.04);
        });
        toolbar.appendChild(backBtn);
        container.appendChild(toolbar);

        // Thumbnail grid
        var grid = document.createElement('div');
        grid.className = 'thumbnail-grid';
        items.forEach(function (item) {
            grid.appendChild(createThumbnail(item));
        });
        container.appendChild(grid);

        // Update status bar
        var statusbar = document.querySelector('#window-' + category + ' .statusbar-section');
        if (statusbar) statusbar.textContent = items.length + ' items';
    }

    // Create a Win98-style folder icon
    function createFolderIcon(name, onOpen) {
        var div = document.createElement('div');
        div.className = 'folder-icon';
        div.innerHTML = '<div class="folder-icon-img">📁</div>' +
            '<div class="folder-icon-label">' + name + '</div>';
        // Single click to open
        div.addEventListener('click', function (e) {
            document.querySelectorAll('.folder-icon.selected').forEach(function (f) { f.classList.remove('selected'); });
            div.classList.add('selected');
            onOpen();
        });
        return div;
    }

    // Initialize folder views on load
    function initFolderViews() {
        showFolders('commercial');
        showFolders('passion');
    }

    function createThumbnail(item) {
        const div = document.createElement('div');
        div.className = 'thumbnail';
        div.innerHTML =
            '<div class="thumbnail-image">' +
            '<img src="' + item.thumbnail + '" alt="' + item.title + '">' +
            '<div class="thumbnail-play">▶</div>' +
            '</div>' +
            '<div class="thumbnail-label">' + item.title + '</div>';

        div.addEventListener('click', function () {
            openVideoModal(item);
        });
        return div;
    }

    // --- Video Modal ---
    function openVideoModal(item) {
        closeStartMenu();
        const modal = document.getElementById('video-modal');
        const title = document.getElementById('modal-title');
        const videoContainer = document.getElementById('modal-video-container');

        // Build Google Drive embed URL from file ID
        const driveEmbedUrl = 'https://drive.google.com/file/d/' + item.video + '/preview';

        // Replace container content with an iframe for Google Drive
        videoContainer.innerHTML = '<iframe id="modal-iframe" src="' + driveEmbedUrl + '" ' +
            'width="100%" height="100%" frameborder="0" allowfullscreen ' +
            'allow="autoplay; encrypted-media" style="border:none;border-radius:4px;"></iframe>';

        title.textContent = item.title;
        modal.classList.add('active');
        playSound(880, 0.08);

        // Fade out background music
        if (window.fadeOutBgMusic) window.fadeOutBgMusic();
    }

    function closeModal() {
        const modal = document.getElementById('video-modal');
        const videoContainer = document.getElementById('modal-video-container');
        // Remove iframe to stop playback
        videoContainer.innerHTML = '';
        modal.classList.remove('active');
        playSound(350, 0.04);

        // Fade background music back in
        if (window.fadeInBgMusic) window.fadeInBgMusic();
    }

    // --- Keyboard Shortcuts ---
    function setupKeyboard() {
        document.addEventListener('keydown', function (e) {
            const key = e.key.toUpperCase();
            if (key === 'E') {
                openWindow('about');
            } else if (key === 'C') {
                openWindow('commercial');
            } else if (key === 'P') {
                openWindow('passion');
            } else if (e.key === 'Escape') {
                closeModal();
                closeStartMenu();
            }
        });
    }

    // --- Close Start Menu on outside click ---
    function setupOutsideClick() {
        document.addEventListener('mousedown', function (e) {
            if (!startMenuOpen) return;
            const menu = document.getElementById('start-menu');
            const btn = document.getElementById('start-button');
            if (!menu.contains(e.target) && !btn.contains(e.target)) {
                closeStartMenu();
            }
        });
    }

    // --- Desktop icon click (single click) ---
    function setupDesktopIcons() {
        document.getElementById('icon-about').addEventListener('click', function () { openWindow('about'); });
        document.getElementById('icon-commercial').addEventListener('click', function () { openWindow('commercial'); });
        document.getElementById('icon-passion').addEventListener('click', function () { openWindow('passion'); });
    }

    // --- Sliding About-Me Panel ---
    let aboutPanelOpen = false;

    function toggleAboutPanel() {
        const panel = document.getElementById('about-panel');
        const overlay = document.getElementById('about-panel-overlay');
        if (!panel) return;
        aboutPanelOpen = !aboutPanelOpen;
        panel.classList.toggle('open', aboutPanelOpen);
        if (overlay) overlay.classList.toggle('open', aboutPanelOpen);
        if (aboutPanelOpen) playSound(600, 0.06);
    }

    function closeAboutPanel() {
        const panel = document.getElementById('about-panel');
        const overlay = document.getElementById('about-panel-overlay');
        if (!panel) return;
        aboutPanelOpen = false;
        panel.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
    }

    // --- Showreel Auto-play ---
    function initShowreel() {
        const container = document.getElementById('showreel-video-container');
        if (!container) return;
        const showreelId = '16mcL3GFYQT9CBO4GILre_vOIRfv7hfHV';
        const driveEmbedUrl = 'https://drive.google.com/file/d/' + showreelId + '/preview';
        container.innerHTML = '<iframe src="' + driveEmbedUrl + '" ' +
            'width="100%" height="100%" frameborder="0" allowfullscreen ' +
            'allow="autoplay; encrypted-media" style="border:none;"></iframe>';
        updateTaskbarButtons();
    }

    function closeShowreel() {
        const win = document.getElementById('window-showreel');
        const container = document.getElementById('showreel-video-container');
        if (win) {
            win.classList.remove('active');
            win.classList.remove('minimized');
        }
        if (container) container.innerHTML = '';
        delete windowStates['showreel'];
        updateTaskbarButtons();
        playSound(350, 0.04);

        // Start background music when showreel is closed
        if (window.startBgMusic) window.startBgMusic();
    }

    // --- Init ---
    document.addEventListener('DOMContentLoaded', function () {
        // Clock
        updateClock();
        setInterval(updateClock, 10000);

        // Start button
        document.getElementById('start-button').addEventListener('click', toggleStartMenu);

        // Start menu items
        document.querySelectorAll('.start-menu-item[data-window]').forEach(function (item) {
            item.addEventListener('click', function () {
                openWindow(item.dataset.window);
            });
        });

        // Desktop icons
        setupDesktopIcons();

        // Quick launch
        const qlAbout = document.getElementById('ql-about');
        const qlCommercial = document.getElementById('ql-commercial');
        const qlPassion = document.getElementById('ql-passion');
        if (qlAbout) qlAbout.addEventListener('click', function () { openWindow('about'); });
        if (qlCommercial) qlCommercial.addEventListener('click', function () { openWindow('commercial'); });
        if (qlPassion) qlPassion.addEventListener('click', function () { openWindow('passion'); });

        // Windows — dragging & resize
        document.querySelectorAll('.window').forEach(function (win) {
            makeWindowDraggable(win);
            setupWindowResize(win);

            // Click to bring to front
            win.addEventListener('mousedown', function () {
                bringToFront(win);
                updateTaskbarButtons();
            });
        });

        setupDragging();
        initFolderViews();
        setupKeyboard();
        setupOutsideClick();

        // About panel toggle button
        var panelToggle = document.getElementById('about-panel-toggle');
        if (panelToggle) panelToggle.addEventListener('click', toggleAboutPanel);

        // Close panel when clicking overlay
        var panelOverlay = document.getElementById('about-panel-overlay');
        if (panelOverlay) panelOverlay.addEventListener('click', closeAboutPanel);

        // Auto-play showreel on load
        initShowreel();

        // Music toggle button
        var musicBtn = document.getElementById('music-toggle');
        if (musicBtn) {
            musicBtn.style.cursor = 'pointer';
            musicBtn.addEventListener('click', function () {
                window.toggleBgMusic();
            });
        }

        // Volume slider
        var volSlider = document.getElementById('volume-slider');
        var volLabel = document.getElementById('volume-label');
        if (volSlider) {
            volSlider.addEventListener('input', function () {
                var vol = parseInt(volSlider.value);
                if (volLabel) volLabel.textContent = vol;
                if (window.setBgVolume) window.setBgVolume(vol);
            });
        }
    });

    // Expose functions to HTML onclick handlers
    window.openWindow = openWindow;
    window.closeWindow = closeWindow;
    window.minimizeWindow = minimizeWindow;
    window.maximizeWindow = maximizeWindow;
    window.closeModal = closeModal;
    window.closeShowreel = closeShowreel;

})();

// ============================================
// Background Music — HTML5 Audio
// ============================================
(function () {
    var bgMusic = null;
    var bgMusicPlaying = false;

    function getAudio() {
        if (!bgMusic) bgMusic = document.getElementById('bg-music');
        return bgMusic;
    }

    function updateMusicIcon(playing) {
        var btn = document.getElementById('music-toggle');
        if (btn) {
            btn.textContent = playing ? '\ud83d\udd0a' : '\ud83d\udd07';
            btn.title = playing ? 'Mute Music' : 'Unmute Music';
        }
    }

    // Start music — called by closeShowreel
    window.startBgMusic = function () {
        var audio = getAudio();
        if (!audio || bgMusicPlaying) return;
        userVolume = (document.getElementById('volume-slider') ? parseInt(document.getElementById('volume-slider').value) : 30) / 100;
        audio.volume = userVolume;
        audio.play().then(function () {
            bgMusicPlaying = true;
            updateMusicIcon(true);
        }).catch(function () {
            // Autoplay blocked — will try again on next interaction
        });
    };

    // Toggle mute/unmute
    window.toggleBgMusic = function () {
        var audio = getAudio();
        if (!audio) return;
        if (bgMusicPlaying) {
            audio.pause();
            bgMusicPlaying = false;
            updateMusicIcon(false);
        } else {
            audio.play().then(function () {
                bgMusicPlaying = true;
                updateMusicIcon(true);
            }).catch(function () {});
        }
    };

    // Volume control
    var userVolume = 0.3;
    window.setBgVolume = function (vol) {
        userVolume = vol / 100;
        var audio = getAudio();
        if (audio) audio.volume = userVolume;
        if (vol === 0) {
            updateMusicIcon(false);
        } else if (bgMusicPlaying) {
            updateMusicIcon(true);
        }
    };

    // Fade out over ~500ms
    var fadeInterval = null;
    window.fadeOutBgMusic = function () {
        var audio = getAudio();
        if (!audio || !bgMusicPlaying) return;
        if (fadeInterval) clearInterval(fadeInterval);
        var vol = audio.volume;
        fadeInterval = setInterval(function () {
            vol -= 0.02;
            if (vol <= 0) {
                vol = 0;
                audio.volume = 0;
                clearInterval(fadeInterval);
                fadeInterval = null;
            } else {
                audio.volume = vol;
            }
        }, 20);
    };

    // Fade back in over ~500ms to user's chosen volume
    window.fadeInBgMusic = function () {
        var audio = getAudio();
        if (!audio || !bgMusicPlaying) return;
        if (fadeInterval) clearInterval(fadeInterval);
        var vol = audio.volume;
        var target = userVolume;
        fadeInterval = setInterval(function () {
            vol += 0.02;
            if (vol >= target) {
                audio.volume = target;
                clearInterval(fadeInterval);
                fadeInterval = null;
            } else {
                audio.volume = vol;
            }
        }, 20);
    };
})();
