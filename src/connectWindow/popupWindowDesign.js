const cssStyles = `
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

      .outer-container {
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        bottom: 0;
        color: #050f19;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        left: 0;
        position: absolute;
        right: 0;
        text-align: center;
        top: 0;
      }
      .container {
        font-family: 'Roboto', sans-serif;
        color: #050f19;
        text-align: center;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-shrink: 0;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 16px;
        padding-top: 16px;
      }
      .upper-text {
        position: relative;
        bottom: 15px;
      }
      .qr-code {
        font-family: 'Roboto', sans-serif;
        color: #050f19;
        height: 210px;
        width: 210px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        box-sizing: border-box;
        background-color: white;
        border-radius: 8px;
        display: inline-block;
      }
      .text-one {
        min-width: 380px;
        height: 30px;
        color: rgba(0, 0, 0);
        font-size: 24px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        text-align: center;
        letter-spacing: 0.3px;
        line-height: 30px;
        box-sizing: border-box;
        padding-bottom: 8px;
      }
      .text-two {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.55);
        font-weight: normal;
        height: 16px;
        letter-spacing: 0.17px;
        text-align: center;
        min-width: 265px;
        padding-top: 8px;
      }
      .list-style {
        width: 278px;
        height: 48px;
        color: rgba(0, 0, 0, 0.55);
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
        font-weight: normal;
        letter-spacing: 0.15px;
        line-height: 16px;
        margin-left: 20px;
        list-style-position: outside;
        text-align: left;
        position: relative;
        left: 30px
      }
      .list-style li {
        margin-left: 0;
        padding-left: 10px;
      }
      .bottom-background {
        background: rgb(249, 250, 251);
        text-align: center;
        padding-top: 25px;
        padding-bottom: 15px;
      }
      .bottom-container {
        position: relative;
        font-family: 'Roboto', sans-serif;
        color: #050f19;
        text-align: center;
        box-sizing: border-box;
        margin-bottom: 16px;
        display: flex;
        flex-direction: row;
        flex-flow: row wrap;
        justify-content: center;
        left: -15px;
      }
      .bottom-container-text {
        font-family: 'Roboto', sans-serif;
        color: #050f19;
        box-sizing: border-box;
        font-size: 13px;
        margin: 0;
        opacity: 0.5;
        text-align: left;
      }
      .bottom-container-text-old {
        font-family: 'Roboto', sans-serif;
        color: #050f19;
        box-sizing: border-box;
        font-size: 13px;
        margin: 0;
        opacity: 0.5;
        padding: 16px;
        text-align: center;
      }

      .left {
        margin-right: 15px;
      }

      .spaceman-background {
        background-color: white;
        border-radius: 10px;
      }

      .center{
        align-items: center;
      }

      .right {
        align-items: flex-start;
        text-align: left;
      }

      .left-img {
        padding-right: 10px;
      }

      p {
        margin: 0;
        padding-bottom: 5px;
      }
      .bottom {
        color: rgba(0, 0, 0, 0.55);
        font-size: 12px;
        font-family: 'Roboto', sans-serif;
        font-weight: lighter;
        letter-spacing: 0.15px;
      }
      
      .bottom-link {
      text-decoration: none;
       color: rgba(5, 192, 165);
       cursor: pointer;
      }

      .refreshIcon {
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
      }

      .hidden {
        display: none;
      }
      
      .get-text {
        width: 265px;
        height: 16px;
        color: rgb(0, 0, 0);
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        font-weight: normal;
        letter-spacing: 0.17px;
      }
      
      .camera-icon {
          opacity: 0.54;
          position: relative;
          bottom: -2px;
          height: 14px;
          width: 14px;
        }
        
        #google-link:hover {
        cursor: pointer;
        }
        
        #apple-link:hover {
        cursor: pointer;
        }
        
        .warn-color {
        color: orange;
        }
    `;

const htmlDesign = (refresh, image, playStore, appStore, camera, iconImage) => {
  return `
    <div class="outer-container">
      <div class="container">
      <div class="upper-text">
        <div class="close-mew-modal" id="close-mew-modal" aria-label="close modal" data-close>
          <img src="${iconImage}" height="15" width="11"/>
        </div>
        <p class="text-one">Connect to MEW wallet app</p>
        <p class="text-two">Scan this code to connect</p>
       </div>

        <div class="qr-code">
          <canvas id="canvas-for-mewconnect-qr-code"></canvas>
        </div>
        <div id="refresh-container" class="refreshIcon hidden">
          <img id="refresh" src="${refresh}" />
        </div>

        <ol class="list-style">
          <li>Open MEW wallet app on your mobile device</li>
          <li class="with-image">Click <img class="camera-icon" src="${camera}"> icon in the top right corner</li>
          <li>Scan this code to connect</li>
        </ol>
      </div>
      <div class="bottom-background">
        <div class="bottom-container">
          <div class="left">
            <img
              class="spaceman-background"
              src="${image}"
              height="58"
              width="58"
            />
          </div>
          <div class="center">
            <div class="right">
              <p class="get-text">Don't have MEW wallet app?</p>
              <p id="popupsBlocked" class="warn-color"></p>
                      <a href="https://apps.apple.com/app/id1464614025" target="_blank" id="appStore">               <img
                  id="apple-link"
                  class="left-img"
                  src="${appStore}"
                  height="40"
                  width="120"
                /></a>

                      <a href="https://play.google.com/store/apps/details?id=com.myetherwallet.mewwallet" target="_blank" id="playStore">                <img
                  id="google-link"
                  src="${playStore}"
                  height="40"
                  width="135"
                /></a>



            </div>
          </div>

        </div>
        <div class="bottom">
          Powered by <a href="https://myetherwallet.github.io/MEWconnect-Protocol-Documentation/" target="_blank" id="proto-link" class="bottom-link">MEWconnect protocol</a> <br />
          brought to you by <a href="https://www.myetherwallet.com/" target="_blank" id="mew-link" class="bottom-link">MyEtherWallet</a>
        </div>
      </div>
    </div>

`;
};

const noticetext = `

      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');


      div#Notifications.hidden {
        visibility: hidden;
      }

      div#Notifications.shown {
        visibility: visible;
      }

      #Notifications,
      #Notifications * {

        animation: none;
        animation-delay: 0;
        animation-direction: normal;
        animation-duration: 0;
        animation-fill-mode: none;
        animation-iteration-count: 1;
        animation-name: none;
        animation-play-state: running;
        animation-timing-function: ease;
        backface-visibility: visible;
        background: 0;
        background-attachment: scroll;
        background-clip: border-box;
        background-color: transparent;
        background-image: none;
        background-origin: padding-box;
        background-position: 0 0;
        background-position-x: 0;
        background-position-y: 0;
        background-repeat: repeat;
        background-size: auto auto;
        border-collapse: separate;
        border-image: none;
        border-spacing: 0;
        border-radius: 0;
        border: medium none inherit;
        bottom: auto;
        box-shadow: none;
        box-sizing: border-box;
        caption-side: top;
        clear: none;
        clip: auto;
        color: inherit;
        columns: auto;
        column-count: auto;
        column-fill: balance;
        column-gap: normal;
        column-rule: medium none currentColor;
        column-rule-color: currentColor;
        column-rule-style: none;
        column-span: 1;
        column-width: auto;
        content: normal;
        counter-increment: none;
        counter-reset: none;
        cursor: auto;
        direction: ltr;
        display: inline;
        empty-cells: show;
        float: none;
        font-family: 'Roboto', sans-serif;
        font-size: medium;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        height: auto;
        hyphens: none;
        left: auto;
        letter-spacing: normal;
        line-height: normal;
        list-style: disc outside none;
        margin: 0;
        max-height: none;
        max-width: none;
        min-height: 0;
        min-width: 0;
        opacity: 1;
        orphans: 0;
        outline: invert none medium;
        overflow: visible;
        overflow-x: visible;
        overflow-y: visible;
        padding: 0;
        page-break-after: auto;
        page-break-before: auto;
        page-break-inside: auto;
        perspective: none;
        perspective-origin: 50% 50%;
        pointer-events: auto;
        position: static;
        quotes: "\\201C" "\\201D" "\\2018" "\\2019";
        right: auto;
        tab-size: 8;
        table-layout: auto;
        text-align: inherit;
        text-align-last: auto;
        text-decoration: none;
        text-decoration-color: inherit;
        text-decoration-line: none;
        text-decoration-style: solid;
        text-indent: 0;
        text-shadow: none;
        text-transform: none;
        top: auto;
        transform: none;
        transform-style: flat;
        transition: none;
        transition-delay: 0s;
        transition-duration: 0s;
        transition-property: none;
        transition-timing-function: ease;
        unicode-bidi: normal;
        vertical-align: baseline;
        white-space: normal;
        widows: 0;
        width: auto;
        word-spacing: normal;
        z-index: 9999999999;
        all: initial;
        all: unset;

      }

      #Notifications * {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        box-sizing: border-box;
      }

      #Notifications {
        position: fixed;
        top: 0;
        right: 0;
        text-align: right;
        z-index: 2147483647;
      }

      #Notifications style {
        display: none;
      }

      #Notifications .Notification {
        display: block;
        margin: 8px 16px 0 16px;
      }

      #Notifications .NotificationBox {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        color: black;
        margin: 0;
        font-size: 14px;
        box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 0px 8px rgba(0, 0, 0, 0.04);
        border-radius: 16px;
        transition: opacity 0.25s, transform 0.25s;
        opacity: 0;
        transform: translateX(25%);
        text-align: left;
        overflow: hidden;
      }

      #Notifications
      .Notificationshow
      .NotificationBox {
        opacity: 1;
        transform: translateX(0);
      }

      #Notifications .NotificationContent {
        background-color: rgb(249, 250, 251);
        display: flex;
        flex-direction: row;
        padding: 8px 8px 8px 16px;
        align-items: center;
        user-select: none;
        cursor: pointer;
      }

      #Notifications .NotificationMessage {
        display: block;
        color: black;
        line-height: 1.5;
      }

      #Notifications .NotificationChevron {
        display: block;
        margin-left: 8px;
        transition: transform 0.05s;
      }

      #Notifications .NotificationProgressBar {
        display: block;
        height: 2px;
        position: relative;
      }

      #Notifications .NotificationProgressBar::before {
        display: block;
        position: absolute;
        content: "";
        left: -100%;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
          to right,
          rgba(22, 82, 240, 0) 0%,
          rgba(51, 199, 176, 1) 100%
        );
        animation: WalletLinkNotificationProgressBar 2s linear infinite;
      }

      @keyframes WalletLinkNotificationProgressBar {
        0% {
          left: 0;
          width: 0%;
          background-image: linear-gradient(
            to right,
            rgba(22, 82, 240, 0) 0%,
            rgba(51, 199, 176, 1) 100%
          );
        }
        25% {
          left: 0;
          width: 100%;
        }
        50% {
          left: 100%;
          width: 0%;
          background-image: linear-gradient(
            to right,
            rgba(22, 82, 240, 0) 0%,
            rgba(51, 199, 176, 1) 100%
          );
        }
        50.01% {
          background-image: linear-gradient(
            to left,
            rgba(22, 82, 240, 0) 0%,
            rgba(51, 199, 176, 1) 100%
          );
        }
        75% {
          left: 0;
          width: 100%;
        }
        100% {
          left: 0;
          width: 0%;
          background-image: linear-gradient(
            to left,
            rgba(22, 82, 240, 0) 0%,
            rgba(51, 199, 176, 1) 100%
          );
        }
      }

      #Notifications
      .NotificationExpand
      .NotificationProgressBar {
        margin-bottom: -1px;
      }

      #Notifications
      .NotificationExpand
      .NotificationChevron {
        transform: rotateZ(180deg);
      }

      #Notifications .NotificationActions {
        display: none;
        flex-direction: column;
        border-top: 1px solid #f5f7f8;
        padding: 8px 16px;
      }

      #Notifications
      .NotificationExpand
      .NotificationActions {
        display: flex;
      }

      #Notifications .NotificationAction {
        color: #888;
        margin: 8px 0;
      }

      #Notifications .NotificationButtonInfo {
        margin: 0 8px 0 0;
      }

      #Notifications .NotificationButton {
        color: #33c7b0;
        -webkit-text-fill-color: #33c7b0;
        cursor: pointer;
        display: inline;
        margin: 0;
        padding: 0;
        -webkit-appearance: none;
        transition: opacity 0.25s;
      }

      #Notifications .NotificationButton:active {
        opacity: 0.6;
      }

      #Notifications .NotificationContent .spaceman-background {
        background-color: rgb(249, 250, 251);
        border-radius: 10px;
        height: 50px;
        width: 50px;
      }
      `;

const windowInformer = spaceman => {
  return `
      <div class="Notification Notificationshow NotificationExpand">
        <div class="NotificationBox">
          <div class="NotificationContent">
            <img
              class="spaceman-background"
              src="${spaceman}"
            />
            <div class="NotificationMessage">Requesting to connect using MEW wallet</div>
          </div>
          <div class="NotificationProgressBar"></div>
          <div class="NotificationActions">
            <div class="NotificationAction"><span
              class="NotificationButtonInfo NotificationButtonInfo1">Don’t see the popup?</span>
              <button id="NotificationButton1" class="NotificationButton NotificationButton1">Show
                                                                                              window
              </button>
            </div>
            <div class="NotificationAction"><span
              class="NotificationButtonInfo NotificationButtonInfo2">Made a mistake?</span>
              <button id="NotificationButton2" class="NotificationButton NotificationButton2">Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
`;
};

const modalFrame = innerContent => {
  return `
    <div class="mew-wallet-modal is-visible" id="mew-wallet-modal"></div>
    <div class="mew-wallet-modal-container is-visible" id="mew-wallet-modal-container">
      <div class="modal-dialog is-visible" id="mew-mobile-modal-dialog">
        <section class="modal-content">
        ${innerContent}
        </section>
      </div>
    </div>
`;
};

const modalCSS = (additionalCss = '') => {
  return `
${additionalCss}

      div.close-mew-modal{
        position: relative;
        padding-top: 10px;
        left: 100%;
        width: 20px;
        cursor: pointer;
      }
      
      .mew-wallet-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background: black;
        cursor: default;
        visibility: hidden;
        opacity: 0;
        transition: all 0.35s ease-in;
      }

      .mew-wallet-modal.is-visible {
        visibility: visible;
        opacity: 0.25;
        z-index: 999999;
      }

      div.modal-dialog {
        background: rgb(255, 255, 255);
        border-radius: 16px;
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
        0px 3px 6px 0px rgba(0, 0, 0, 0.05),
        0px 8px 16px 0px rgba(0, 0, 0, 0.05);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        min-width: 448px;
        max-width: 448px;
        min-height: 558px;
        overflow: auto;
        opacity: 0;
        visibility: hidden;
        z-index: 999999;
      }

      .mew-wallet-modal-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        background-color: transparent;
        cursor: default;
        visibility: hidden;
        opacity: 0;
        transition: all 0.35s ease-in;
        z-index: 999999;
      }

      div.mew-wallet-modal-container.is-visible {
        visibility: visible;
        opacity: 1;
        background-color: transparent;
      }

      div.modal-dialog.is-visible {
        visibility: visible;
        opacity: 1;
        z-index: 99999999999999;
      }

      .modal-dialog > * {
        padding: 1rem;
      }

      .modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .modal-header .close-modal {
        font-size: 1.5rem;
      }

`;
};
export {
  cssStyles,
  htmlDesign,
  noticetext,
  windowInformer,
  modalFrame,
  modalCSS
};