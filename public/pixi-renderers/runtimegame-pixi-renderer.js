var gdjs;(function(l){const f=new l.Logger("PIXI game renderer"),h=GlobalPIXIModule.PIXI,m=[37,38,39,40];class g{constructor(n,e){this._isFullPage=!0;this._isFullscreen=!1;this._pixiRenderer=null;this._domElementsContainer=null;this._canvasWidth=0;this._canvasHeight=0;this._keepRatio==0;this._nextFrameId=0;this._game=n,this._forceFullscreen=e,this._marginLeft=this._marginTop=this._marginRight=this._marginBottom=0,this._setupOrientation()}createStandardCanvas(n){this._pixiRenderer=h.autoDetectRenderer({width:this._game.getGameResolutionWidth(),height:this._game.getGameResolutionHeight(),preserveDrawingBuffer:!0,antialias:!1});const e=this._pixiRenderer.view;n.appendChild(e),e.style.position="absolute",e.tabIndex=1,e.style.userSelect="none",e.style.outline="none";const t=document.createElement("div");t.style.position="absolute",t.style.overflow="hidden",t.style.outline="none",t.style.pointerEvents="none",t.addEventListener("scroll",s=>{t.scrollLeft=0,t.scrollTop=0,s.preventDefault()}),e.addEventListener("pointerdown",()=>{e.focus()}),t.style["-webkit-user-select"]="none",n.appendChild(t),this._domElementsContainer=t,this._resizeCanvas(),this._game.getScaleMode()==="nearest"&&(this._pixiRenderer.view.style["image-rendering"]="-moz-crisp-edges",this._pixiRenderer.view.style["image-rendering"]="-webkit-optimize-contrast",this._pixiRenderer.view.style["image-rendering"]="-webkit-crisp-edges",this._pixiRenderer.view.style["image-rendering"]="pixelated"),this._game.getPixelsRounding()&&(h.settings.ROUND_PIXELS=!0),window.addEventListener("resize",()=>{this._game.onWindowInnerSizeChanged(),this._resizeCanvas(),this._game._notifySceneForResize=!0}),e.focus()}static getWindowInnerWidth(){return typeof window!="undefined"?window.innerWidth:800}static getWindowInnerHeight(){return typeof window!="undefined"?window.innerHeight:800}updateRendererSize(){this._resizeCanvas()}_setupOrientation(){if(typeof window=="undefined"||!window.screen||!window.screen.orientation)return;const n=this._game.getGameData().properties.orientation;try{if(n==="default"){const e=window.screen.orientation.unlock();e&&e.catch(()=>{})}else window.screen.orientation.lock(n).catch(()=>{})}catch(e){f.error("Unexpected error while setting up orientation: ",e)}}_resizeCanvas(){if(!this._pixiRenderer||!this._domElementsContainer)return;(this._pixiRenderer.width!==this._game.getGameResolutionWidth()||this._pixiRenderer.height!==this._game.getGameResolutionHeight())&&this._pixiRenderer.resize(this._game.getGameResolutionWidth(),this._game.getGameResolutionHeight());const n=this._forceFullscreen||this._isFullPage||this._isFullscreen;let e=this._game.getGameResolutionWidth(),t=this._game.getGameResolutionHeight(),s=window.innerWidth-this._marginLeft-this._marginRight,o=window.innerHeight-this._marginTop-this._marginBottom;if(s<0&&(s=0),o<0&&(o=0),n&&!this._keepRatio)e=s,t=o;else if(n&&this._keepRatio||e>s||t>o){let a=s/e;t*a>o&&(a=o/t),e*=a,t*=a}this._pixiRenderer.view.style.top=this._marginTop+(o-t)/2+"px",this._pixiRenderer.view.style.left=this._marginLeft+(s-e)/2+"px",this._pixiRenderer.view.style.width=e+"px",this._pixiRenderer.view.style.height=t+"px",this._domElementsContainer.style.top=this._marginTop+(o-t)/2+"px",this._domElementsContainer.style.left=10+"%",this._canvasWidth=e,this._canvasHeight=t}keepAspectRatio(n){this._keepRatio!==n&&(this._keepRatio=n,this._resizeCanvas(),this._game._notifySceneForResize=!0)}setMargins(n,e,t,s){this._marginTop===n&&this._marginRight===e&&this._marginBottom===t&&this._marginLeft===s||(this._marginTop=n,this._marginRight=e,this._marginBottom=t,this._marginLeft=s,this._resizeCanvas(),this._game._notifySceneForResize=!0)}setWindowSize(n,e){const t=this.getElectron();if(t){const s=t.remote.getCurrentWindow();s&&s.setContentSize(n,e)}else f.warn("Window size can't be changed on this platform.")}centerWindow(){const n=this.getElectron();if(n){const e=n.remote.getCurrentWindow();e&&e.center()}}setFullScreen(n){if(!this._forceFullscreen&&this._isFullscreen!==n){this._isFullscreen=!!n;const e=this.getElectron();if(e){const t=e.remote.getCurrentWindow();t&&t.setFullScreen(this._isFullscreen)}else this._isFullscreen?document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullScreen&&document.documentElement.webkitRequestFullScreen():document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen();this._resizeCanvas(),this._notifySceneForResize=!0}}isFullScreen(){const n=this.getElectron();return n?n.remote.getCurrentWindow().isFullScreen():this._isFullscreen||window.screen.height===window.innerHeight}convertCanvasToDomElementContainerCoords(n){const e=[n[0],n[1]];return e[0]/=this._game.getGameResolutionWidth()/(this._canvasWidth||1),e[1]/=this._game.getGameResolutionHeight()/(this._canvasHeight||1),e}getCanvasToDomElementContainerHeightScale(){return(this._canvasHeight||1)/this._game.getGameResolutionHeight()}bindStandardEvents(n,e,t){const s=this._pixiRenderer;if(!s)return;const o=s.view,a=this;function d(i){const r=[i.pageX-o.offsetLeft,i.pageY-o.offsetTop];return r[0]*=a._game.getGameResolutionWidth()/(a._canvasWidth||1),r[1]*=a._game.getGameResolutionHeight()/(a._canvasHeight||1),r}(function(){isNaN(o.offsetLeft)&&(o.offsetLeft=0,o.offsetTop=0),isNaN(t.body.scrollLeft)&&(t.body.scrollLeft=0,t.body.scrollTop=0),(t.documentElement===void 0||t.documentElement===null)&&(t.documentElement={}),isNaN(t.documentElement.scrollLeft)&&(t.documentElement.scrollLeft=0,t.documentElement.scrollTop=0),isNaN(o.offsetLeft)&&(o.offsetLeft=0,o.offsetTop=0)})();const c=()=>!(t.activeElement===o||t.activeElement===t.body||t.activeElement===null);t.onkeydown=function(i){c()||(m.includes(i.keyCode)&&i.preventDefault(),n.onKeyPressed(i.keyCode,i.location))},t.onkeyup=function(i){c()||(m.includes(i.keyCode)&&i.preventDefault(),n.onKeyReleased(i.keyCode,i.location))},o.onmousemove=function(i){const r=d(i);n.onMouseMove(r[0],r[1])},o.onmousedown=function(i){return n.onMouseButtonPressed(i.button===2?l.InputManager.MOUSE_RIGHT_BUTTON:i.button===1?l.InputManager.MOUSE_MIDDLE_BUTTON:l.InputManager.MOUSE_LEFT_BUTTON),e.focus!==void 0&&e.focus(),!1},o.onmouseup=function(i){return n.onMouseButtonReleased(i.button===2?l.InputManager.MOUSE_RIGHT_BUTTON:i.button===1?l.InputManager.MOUSE_MIDDLE_BUTTON:l.InputManager.MOUSE_LEFT_BUTTON),!1},e.addEventListener("click",function(i){return e.focus!==void 0&&e.focus(),i.preventDefault(),!1},!1),o.oncontextmenu=function(i){return i.preventDefault(),i.stopPropagation(),!1},o.onwheel=function(i){n.onMouseWheel(-i.deltaY)},e.addEventListener("touchmove",function(i){if(!c()&&(i.preventDefault(),i.changedTouches))for(let r=0;r<i.changedTouches.length;++r){const u=d(i.changedTouches[r]);n.onTouchMove(i.changedTouches[r].identifier,u[0],u[1])}}),e.addEventListener("touchstart",function(i){if(!c()){if(i.preventDefault(),i.changedTouches)for(let r=0;r<i.changedTouches.length;++r){const u=d(i.changedTouches[r]);n.onTouchStart(i.changedTouches[r].identifier,u[0],u[1])}return!1}}),e.addEventListener("touchend",function(i){if(!c()){if(i.preventDefault(),i.changedTouches)for(let r=0;r<i.changedTouches.length;++r){const u=d(i.changedTouches[r]);n.onTouchEnd(i.changedTouches[r].identifier)}return!1}})}setWindowTitle(n){typeof document!="undefined"&&(document.title=n)}getWindowTitle(){return typeof document!="undefined"?document.title:""}startGameLoop(n){let e=0;const t=s=>{this._nextFrameId=requestAnimationFrame(t);const o=e?s-e:0;e=s,n(o)||cancelAnimationFrame(this._nextFrameId)};requestAnimationFrame(t)}getPIXIRenderer(){return this._pixiRenderer}getDomElementContainer(){return this._domElementsContainer}openURL(n){if(typeof window!="undefined"){const e=this.getElectron();if(e)e.shell.openExternal(n);else{const t=window.cordova?"_system":"_blank";window.open(n,t)}}}stopGame(){const n=this.getElectron();if(n){const e=n.remote.getCurrentWindow();e&&e.close()}else typeof navigator!="undefined"&&navigator.app&&navigator.app.exitApp&&navigator.app.exitApp()}getCanvas(){return this._pixiRenderer.view}isWebGLSupported(){return!!this._pixiRenderer&&this._pixiRenderer.type===h.RENDERER_TYPE.WEBGL}getElectron(){return typeof require!="undefined"?require("electron"):null}}l.RuntimeGamePixiRenderer=g,l.RuntimeGameRenderer=g})(gdjs||(gdjs={}));
//# sourceMappingURL=runtimegame-pixi-renderer.js.map
