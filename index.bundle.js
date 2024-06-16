"use strict";
(self.webpackChunkceicat_web = self.webpackChunkceicat_web || []).push([[57], {
    208: (n,e,t)=>{
        t.d(e, {
            A: ()=>h
        });
        var i = t(354)
          , a = t.n(i)
          , o = t(314)
          , r = t.n(o)
          , A = t(417)
          , s = t.n(A)
          , l = new URL(t(305),t.b)
          , c = new URL(t(842),t.b)
          , d = new URL(t(822),t.b)
          , p = new URL(t(241),t.b)
          , m = r()(a())
          , g = s()(l)
          , C = s()(c)
          , B = s()(d)
          , u = s()(p);
        m.push([n.id, `@font-face {\n  font-family: 'space-reg';\n  src: url(${g});\n}\n@font-face {\n  font-family: 'space-bold';\n  src: url(${C});\n}\n@font-face {\n  font-family: 'space-bold-italic';\n  src: url(${B});\n}\n@font-face {\n  font-family: 'impact';\n  src: url(${u});\n}\n\n:root {\n  --crust: rgba(17, 17, 27, 0.42);\n  --base: #232634;\n  --baseTranslucent: rgba(35, 38, 52, 0.11);\n  --text: #F3F3F3;\n  --textTranslucent: rgba(198, 208, 245, 0.169);\n  --rosewater: #f5e0dc;\n  --pink: #f5c2e7;\n  --lavender: #b4befe;\n  --lavenderTranslucent: rgba(180, 190, 254, 0.88);\n  --mauve: #cba6f7;\n  --red: #f38ba8;\n  --redTranslucent: rgba(243, 139, 168, 0.8);\n  --maroon: #eba0ac;\n  --peach: #fab387;\n  --yellow: #f9e2af;\n  --green: #a6e3a1;\n  --greenTranslucent: rgba(166, 227, 161, 0.8);\n  --teal: rgba(148, 226, 213, 1.0);\n  --blue: #89b4fa;\n  --sky: rgb(137, 220, 235);\n  --sapphire: rgb(116, 199, 236);\n}\n\n* {\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n*::-webkit-scrollbar {\n  display: none;\n}\n\n#backdropContainer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: -100;\n}\n\n#backdropContainer .blob {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.blob-svg {\n  width: 600px;\n  height: 600px;\n  filter: blur(80px);\n  -webkit-filter: blur(80px);\n}\n\nbutton {\n  color: var(--text);\n  background-color: var(--textTranslucent);\n  font-family: 'space-bold';\n  padding: 6px 12px;\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 0.1px solid var(--crust);\n  border-radius: 12px;\n  cursor: pointer;\n}\nbutton:hover {\n  background-color: rgba(198, 208, 245, 0.25);\n}\nbutton:active {\n  background-color: var(--textTranslucent);\n  border: 0.1px solid var(--crust);\n}\nbutton:disabled {\n  cursor: not-allowed;\n}\n\na:link {\n  color: var(--text);\n}\na:visited {\n  color: var(--mauve);\n}\na:hover {\n  color: var(--lavender);\n}\na:active {\n  color: var(--text);\n}\n\nhtml { width: 100%; }\nbody {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 16px;\n  background-color: var(--base);\n  color: var(--text);\n  font-family: 'space-reg';\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\nheader {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\nheader img {\n  height: 80px;\n}\n\nmain {\n  margin-top: 16px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n\n#catOrigins {\n  width: calc(100% - 32px);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  margin-left: 16px;\n  margin-right: 16px;\n}\n#catOrigins div {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n#catOrigins div h1 {\n  margin-bottom: -8px;\n  align-self: flex-start;\n}\n#catOrigins div p {\n  font-size: 1rem;\n  align-self: flex-start;\n  text-align: start;\n}\n#catOrigins div button {\n  font-size: 1rem;\n  align-self: center;\n}\n\n#catOriginsVidContainer {\n  background-color: var(--textTranslucent);\n  padding: 4px;\n  border: 0.1px solid var(--crust);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  z-index: 99; \n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),\n                    0 1px 4px 1px rgba(0,0,0,0.22),\n                    0 0 0 1px rgba(0, 0, 0, 0.0);\n}\n#catOriginsVid {\n  width: 100%;\n  border-radius: 12px;\n  opacity: 0.77;\n}\n\n#catCollage {\n  margin-top: 48px;\n  width: calc(100% - 32px);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 16px;\n  margin-left: 16px;\n  margin-right: 16px;\n}\n#catCollage img {\n  width: 432px;\n  opacity: 0.77;\n}\n#catCollage button {\n  font-size: 1rem;\n}\n\n#howToBuy {\n  margin-top: 48px;\n  width: calc(100% - 32px);\n  max-width: 1024px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  margin-left: 16px;\n  margin-right: 16px;\n}\n#howToBuy .header {\n  margin-top: 0;\n  margin-bottom: 16px;\n  align-self: center; \n}\n#howToBuy .steps {\n  margin-top: -16px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 16px;\n  grid-row-gap: 16px;\n}\n#howToBuy .steps .stepContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n  border-radius: 12px;\n  background-color: var(--textTranslucent);\n  border: 0.1px solid var(--crust);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),\n                    0 1px 4px 1px rgba(0,0,0,0.22),\n                    0 0 0 1px rgba(0, 0, 0, 0.0);\n}\n.stepContainer .stepIcon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  margin-top: 16px;\n}\n.stepContainer .stepHeader {\n  margin-top: 8px;\n  font-size: 1.4rem;\n}\n.stepContainer .stepSpan {\n  font-size: 1rem;\n  text-align: center;\n}\n\n#buyContainer {\n  margin-top: 16px;\n  border: 0.1px solid var(--crust);\n  padding: 12px;\n  border-radius: 12px;\n  background-color: var(--textTranslucent);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),\n                    0 1px 4px 1px rgba(0,0,0,0.22),\n                    0 0 0 1px rgba(0, 0, 0, 0.0);\n}\n\n#glossary {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 48px;\n  width: calc(100% - 32px);\n  max-width: 1024px;\n  height: 720px;\n  padding-top: 16px;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-bottom: 0;\n  border-radius: 12px;\n  background-color: var(--textTranslucent);\n  border-top: 0.1px solid var(--crust);\n  border-left: 0.1px solid var(--crust);\n  border-right: 0.1px solid var(--crust);\n  border-bottom: none;\n  position: relative;\n  --fade-opacity: 1;\n}\n#glossary::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  margin-bottom: -1px;\n  border-radius: 12px;\n  left: 0;\n  width: 100%;\n  height: 96px;\n  background: linear-gradient(to bottom, rgba(35, 38, 52, 0) 0%, #232634 100%);\n  pointer-events: none;\n  opacity: var(--fade-opacity);\n  transition: opacity 0.3s ease;\n}\n#doubleGlossaryContainer {\n  width: 100%;\n  height: 100%;\n  padding: 4px;\n  margin-top: 32px;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  gap: 16px;\n  background: none; \n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-bottom: 16px;\n}\n#glossaryHeader {\n  margin-top: 0;\n}\n#glossaryDesc {\n  font-size: 1rem;\n}\n#doubleGlossaryContainer .letters {\n  font-size: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  border: 0.1px solid var(--crust);\n  padding: 16px;\n  border-radius: 12px;\n  background-color: var(--textTranslucent);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),\n                    0 1px 4px 1px rgba(0,0,0,0.22),\n                    0 0 0 1px rgba(0, 0, 0, 0.0); \n}\n.letterHeader {\n  align-self: center;\n}\n.acronymContainer {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.glossaryHeader {\n  align-self: flex-start;\n}\n.glossaryMeaning {\n  align-self: flex-start;\n  text-align: end;\n}\n\n#catLord {\n  margin-top: 48px;\n  width: calc(100% - 32px);\n  max-width: 1024px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 48px;\n}\n#catLord img {\n  width: 50%;\n  border-radius: 12px;\n  opacity: 0.77;\n}\n#catLordText {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: end;\n  gap: 24px;\n}\n#catLordText div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n#catLordText div span {\n  font-size: 2rem;\n  align-self: flex-start;\n}\n#catLordText div button {\n  font-size: 1rem;\n  align-self: flex-end;\n}\n\n#memeGenContainer {\n  margin-top: 48px;\n  width: calc(100% - 32px);\n  max-width: 1024px;\n  background-color: var(--textTranslucent);\n  padding: 16px;\n  border: 0.1px solid var(--crust);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),\n                    0 1px 4px 1px rgba(0,0,0,0.22),\n                    0 0 0 1px rgba(0, 0, 0, 0.0);\n}\n\n#memeGenContainer .infoH1 {\n  align-self: flex-start;\n  font-size: 2rem;\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n\n#memeGenContainer button {\n  background-color: var(--baseTranslucent);\n  color: var(--text);\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  font-size: 1rem;\n}\n#memeGenContainer button:hover {\n  background-color: var(--textTranslucent);\n}\n#memeGenContainer button:active {\n  background-color: var(--baseTranslucent);\n}\n\n#memeGenContainer .uploadActions {\n  position: absolute;\n  top: 20px;\n  right: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}\n\n#memeGenContainer .uploadActions #downloadBtn {\n  color: var(--green);\n}\n#memeGenContainer .uploadActions #downloadBtn:hover {\n  background-color: rgba(166, 227, 161, 0.25);\n}\n#memeGenContainer .uploadActions #downloadBtn:active {\n  background-color: var(--baseTranslucent);\n}\n\n#memeGenContainer canvas {\n  width: 100%;\n  border: 0.1px solid var(--crust);\n  border-radius: 12px;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),\n                    0 1px 4px 1px rgba(0,0,0,0.22),\n                    0 0 0 1px rgba(0, 0, 0, 0.0);\n}\n\n#textBoxInput {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n  width: 256px;\n  height: 64px;\n  border: 0.1px solid var(--crust);\n  border-radius: 12px;\n  cursor: text;\n  background-color: var(--baseTranslucent);\n  color: var(--text);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  font-family: 'space-bold';\n  font-size: 1rem;\n  text-align: start;\n}\n#textBoxInput::placeholder {\n  text-align: center;\n  color: var(--text);\n  font-family: 'space-bold-italic';\n}\n\n#rotateDegInput {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n  width: 256px;\n  height: 64px;\n  border: 0.1px solid var(--crust);\n  border-radius: 12px;\n  cursor: text;\n  background-color: var(--baseTranslucent);\n  color: var(--text);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  font-family: 'space-bold';\n  font-size: 1rem;\n  text-align: end;\n}\n#rotateDegInput::placeholder {\n  text-align: center;\n  color: var(--text);\n  font-family: 'space-bold-italic';\n}\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\ninput[type=number] {\n  appearance: textfield;\n  -moz-appearance: textfield;\n}\n\n.imgAct-selected {\n  background-color: var(--lavenderTranslucent) !important;\n  color: var(--base) !important;\n}\n.imgAct-disabled {\n  opacity: 0.5;\n}\n\n#memeGenContainer .imgActions {\n  margin-top: 16px;\n  align-self: flex-end;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 8px;\n  grid-row-gap: 8px; \n}\n#memeGenContainer .imgActions button {\n  font-family: 'space-bold';\n  font-size: 0.77rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: center;\n}\n\n#actionAcceptBtn {\n  background-color: var(--greenTranslucent) !important;\n  color: var(--base) !important;\n  position: absolute;\n  padding: 8px;\n  bottom: 0;\n  right: 0;\n  margin-bottom: 54px;\n  margin-right: 436px;\n}\n\n#actionRejectBtn {\n  background-color: var(--redTranslucent) !important;\n  color: var(--base) !important;\n  position: absolute;\n  padding: 8px;\n  bottom: 0;\n  right: 0;\n  margin-bottom: 16px;\n  margin-right: 436px;\n}\n\n#catWatchText {\n  margin-top: 48px;\n  font-family: 'space-bold';\n  font-size: 2rem;\n}\n#catWatchImg {\n  width: 200px;\n  padding-bottom: 144px;\n}\n\nfooter {\n  position: fixed;\n  bottom: 16px;\n  left: 16px;\n  width: calc(100% - 32px);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  z-index: 99;\n}\n\n#footerBtns {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n\n#footerBtns button {\n  font-size: 1rem;\n}\n\n.socials {\n  position: absolute;\n  bottom: 132px;\n  left: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  z-index: 90;\n}\n\n#telegramBtn {\n  color: var(--sapphire);\n}\n#telegramBtn:hover {\n  background-color: rgba(116, 199, 236, 0.25);\n}\n#telegramBtn:active {\n  background-color: var(--textTranslucent);\n}\n#twitterBtn {\n  color: var(--blue);\n}\n#twitterBtn:hover {\n  background-color: rgba(137, 180, 250, 0.25);\n}\n#twitterBtn:active {\n  background-color: var(--textTranslucent);\n}\n#tiktokBtn {\n  color: var(--pink);\n}\n#tiktokBtn:hover {\n  background-color: rgba(245, 194, 231, 0.25);\n}\n#tiktokBtn:active {\n  background-color: var(--textTranslucent);\n}\n#youtubeBtn {\n  color: var(--red);\n}\n#youtubeBtn:hover {\n  background-color: rgba(243, 139, 168, 0.25);\n}\n#youtubeBtn:active {\n  background-color: var(--textTranslucent);\n}\n\n.buyAction {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  z-index: 99;\n}\n\n.moreCharts {\n  position: absolute;\n  bottom: 132px;\n  right: 0;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 12px;\n  grid-row-gap: 12px; \n}\n\n#moreChartsBtn {\n  color: var(--lavender);\n}\n#moreChartsBtn:hover {\n  background-color: rgba(180, 190, 254, 0.25);\n}\n#moreChartsBtn:active {\n  background-color: var(--textTranslucent);\n  border: 0.1px solid transparent;\n}\n#buyBtn {\n  color: var(--green);\n}\n#buyBtn:hover {\n  background-color: rgba(166, 227, 161, 0.25);\n}\n#buyBtn:active {\n  background-color: var(--textTranslucent);\n}\n\n#footerAction {\n  width: calc(100% - 32px);\n  background-color: var(--textTranslucent);\n  padding: 16px;\n  border: 0.1px solid var(--crust);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  z-index: 99;\n}\n\n.contract {\n  display: flex;\n  flex-direction: row; \n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n}\n#contract {\n  font-family: 'space-reg';\n  font-size: 1rem;\n  word-break: break-all;\n  z-index: 99;\n}\n#copyCaBtn {\n  background-color: transparent;\n  font-family: 'space-bold';\n  font-size: 1rem;  \n  z-index: 99;\n}\n\n#musicBtn {\n  padding: 6px 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-size: 1rem;\n}\n#musicBtn img {\n  padding: 2px 0px;\n  width: 18px;\n  height: 20px;\n}\n\n#musicWidget {\n  position: fixed;\n  bottom: 80px;\n  right: 16px;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 12px;\n  grid-row-gap: 12px; \n  z-index: 1000;\n}\n#musicWidget button {\n  font-size: 1rem;\n}\n\n@media screen and (max-width: 816px) {\n\n  body {\n    margin: 12px;\n  }\n\n  .blob-svg {\n    width: 368px;\n    height: 368px;\n  }\n\n  #catOrigins {\n    margin-top: -24px;\n    width: calc(100% - 4px);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    gap: 12px;\n  }\n  #catOrigins div {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  #catOrigins div h1 {\n    margin-bottom: -12px;\n    align-self: center;\n    font-size: 1.54rem;\n  }\n  #catOrigins div p {\n    font-size: 0.77rem;\n    align-self: center;\n    text-align: center;\n  }\n  #catOrigins div button {\n    font-size: 0.77rem;\n    align-self: center;\n  }\n\n  #catOriginsVidContainer {\n    background-color: var(--textTranslucent);\n    padding: 3px;\n    border: 0.1px solid var(--crust);\n    border-radius: 12px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    backdrop-filter: blur(20px);\n    -webkit-backdrop-filter: blur(20px);\n    z-index: 99; \n  }\n  #catOriginsVid {\n    width: 100%;\n    border-radius: 12px;\n    opacity: 0.77;\n  }\n\n  #catCollage {\n    margin-top: 24px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 24px;\n    margin-left: 12px;\n    margin-right: 12px;\n  }\n  #catCollage img {\n    width: 100%;\n    opacity: 0.77;\n  }\n  #catCollage button {\n    font-size: 0.77rem;\n  }\n\n  #howToBuy {\n    margin-top: 24px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    gap: 12px;\n    margin-left: 12px;\n    margin-right: 12px;\n  }\n  #howToBuy .header {\n    margin-top: 0;\n    margin-bottom: 12px;\n    align-self: center; \n    font-size: 1.54rem;\n  }\n  #howToBuy .steps {\n    margin-top: -12px;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(4, 1fr); \n    grid-column-gap: 12px;\n    grid-row-gap: 12px;\n  }\n  #howToBuy .steps .stepContainer {\n    padding: 12px;\n  }\n  .stepContainer .stepIcon {\n    top: 0;\n    margin-top: 12px;\n  }\n  .stepContainer .stepHeader {\n    margin-top: 8px;\n    font-size: 1rem;\n  }\n  .stepContainer .stepSpan {\n    font-size: 0.77rem;\n    text-align: center;\n  }\n  #buyContainer {\n    margin-top: 12px;\n    border: 0.1px solid var(--crust);\n    padding: 8px;\n    border-radius: 12px;\n    background-color: var(--textTranslucent);\n  }\n\n  #glossary {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 24px;\n    width: calc(100% - 24px);\n    height: 520px;\n    padding-top: 12px;\n    padding-left: 12px;\n    padding-right: 12px;\n    padding-bottom: 0;\n    border-radius: 12px;\n    background-color: var(--textTranslucent);\n    border: 0.1px solid var(--crust);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),\n    0 1px 4px 1px rgba(0,0,0,0.22),\n    0 0 0 1px rgba(0, 0, 0, 0.0); \n  }\n  #doubleGlossaryContainer {\n    width: 100%;\n    height: 100%;\n    padding: 4px;\n    margin-top: 16px;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    gap: 12px;\n    background: none; \n    overflow-x: hidden;\n    overflow-y: auto;\n    padding-bottom: 12px;\n  }\n  #glossaryHeader {\n    font-size: 1.54rem;\n    margin-top: 0;\n  }\n  #glossaryDesc {\n    margin-top: -16px;\n    font-size: 0.77rem;\n    text-align: center;\n  }\n  #doubleGlossaryContainer .letters {\n    gap: 6px;\n    padding: 12px;\n    font-size: 0.77rem;\n  }\n\n  #catLord {\n    margin-top: 24px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n  }\n  #catLord img {\n    width: 100%;\n    border-radius: 12px;\n    opacity: 0.77;\n  }\n  #catLordText {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 24px;\n  }\n  #catLordText div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  #catLordText div span {\n    font-size: 1.42rem;\n    align-self: center;\n  }\n  #catLordText div button {\n    font-size: 0.77rem;\n    align-self: center;\n  }\n\n  #memeGenContainer {\n    margin-top: 24px !important;\n    width: calc(100% - 24px) !important;\n    max-width: 1024px;\n    padding: 12px !important;\n  }\n\n  #memeGenContainer .infoH1 {\n    align-self: flex-start;\n    font-size: 1.42rem;\n    margin-top: -4px;\n    margin-bottom: 58px !important;\n  }\n\n  #memeGenContainer button {\n    font-size: 0.77rem;\n  }\n\n  #memeGenContainer .uploadActions {\n    position: absolute;\n    top: 52px;\n    right: 12px;\n    left: 12px;\n    gap: 8px;\n  }\n\n  #textBoxInput {\n    position: absolute;\n    bottom: 52px;\n    left: 12px;\n    width: 96px;\n    height: 112px;\n    text-align: start;\n  }\n\n  #rotateDegInput {\n    position: absolute;\n    bottom: 52px;\n    left: 12px;\n    width: 96px;\n    height: 112px;\n    border: 0.1px solid var(--crust);\n    border-radius: 12px;\n    cursor: text;\n    background-color: var(--baseTranslucent);\n    color: var(--text);\n    backdrop-filter: blur(20px);\n    -webkit-backdrop-filter: blur(20px);\n    font-family: 'space-bold';\n    font-size: 0.77rem;\n    text-align: end;\n  }\n\n  #memeGenContainer .imgActions {\n    width: 192px;\n    margin-top: 12px;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    grid-column-gap: 4px;\n    grid-row-gap: 4px;\n  }\n  #memeGenContainer .imgActions button {\n    text-align: start;\n  }\n\n  .memeAct-svg {\n    width: 12px !important;\n    height: 12px !important;\n  }\n\n  #actionAcceptBtn {\n    position: absolute;\n    padding: 8px 16px;\n    bottom: 0;\n    right: 0;\n    margin-bottom: 12px;\n    margin-right: 264px;\n  }\n  \n  #actionRejectBtn {\n    position: absolute;\n    padding: 8px 16px;\n    bottom: 0;\n    right: 0;\n    margin-bottom: 12px;\n    margin-right: 212px;\n  }\n\n  #catWatchText {\n    margin-top: 24px;\n    font-family: 'space-bold';\n    font-size: 1.54rem;\n    text-align: center;\n  }\n  #catWatchImg {\n    width: 200px;\n    padding-bottom: 160px;\n    opacity: 0.88;\n  }\n\n  footer {\n    position: fixed;\n    bottom: 12px;\n    left: 12px;\n    width: calc(100% - 24px);\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    z-index: 99;\n  }\n  \n  #footerBtns {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 12px;\n  }\n  \n  #footerBtns button {\n    font-size: 0.77rem;\n  }\n\n  .socials {\n    position: absolute;\n    bottom: 132px;\n    left: 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n    z-index: 90;\n  }\n\n  #contract {\n    width: 176px;\n    font-size: 0.77rem;\n  }\n  #copyCaBtn {\n    font-size: 0.77rem;\n    padding: 11px 8px;\n    border-radius: 8px;\n  }\n  \n  #musicBtn {\n    padding: 8px 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-size: 1rem;\n  }\n  #musicBtn img {\n    padding: 2px 0px;\n    width: 16px;\n    height: 20px;\n  }\n  \n  #musicWidget {\n    position: fixed;\n    bottom: 98px;\n    right: 12px;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-column-gap: 4px;\n    grid-row-gap: 4px; \n    z-index: 1000;\n    margin-left: 12px;\n  }\n  #musicWidget button {\n    font-size: 0.77rem;\n  }\n}`, "", {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings: "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",
            sourcesContent: ["@font-face {\n  font-family: 'space-reg';\n  src: url('./metadata/fonts/SpaceMono-Regular.ttf');\n}\n@font-face {\n  font-family: 'space-bold';\n  src: url('./metadata/fonts/SpaceMono-Bold.ttf');\n}\n@font-face {\n  font-family: 'space-bold-italic';\n  src: url('./metadata/fonts/SpaceMono-BoldItalic.ttf');\n}\n@font-face {\n  font-family: 'impact';\n  src: url('./metadata/fonts/impact.ttf');\n}\n\n:root {\n  --crust: rgba(17, 17, 27, 0.42);\n  --base: #232634;\n  --baseTranslucent: rgba(35, 38, 52, 0.11);\n  --text: #F3F3F3;\n  --textTranslucent: rgba(198, 208, 245, 0.169);\n  --rosewater: #f5e0dc;\n  --pink: #f5c2e7;\n  --lavender: #b4befe;\n  --lavenderTranslucent: rgba(180, 190, 254, 0.88);\n  --mauve: #cba6f7;\n  --red: #f38ba8;\n  --redTranslucent: rgba(243, 139, 168, 0.8);\n  --maroon: #eba0ac;\n  --peach: #fab387;\n  --yellow: #f9e2af;\n  --green: #a6e3a1;\n  --greenTranslucent: rgba(166, 227, 161, 0.8);\n  --teal: rgba(148, 226, 213, 1.0);\n  --blue: #89b4fa;\n  --sky: rgb(137, 220, 235);\n  --sapphire: rgb(116, 199, 236);\n}\n\n* {\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n*::-webkit-scrollbar {\n  display: none;\n}\n\n#backdropContainer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: -100;\n}\n\n#backdropContainer .blob {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.blob-svg {\n  width: 600px;\n  height: 600px;\n  filter: blur(80px);\n  -webkit-filter: blur(80px);\n}\n\nbutton {\n  color: var(--text);\n  background-color: var(--textTranslucent);\n  font-family: 'space-bold';\n  padding: 6px 12px;\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border: 0.1px solid var(--crust);\n  border-radius: 12px;\n  cursor: pointer;\n}\nbutton:hover {\n  background-color: rgba(198, 208, 245, 0.25);\n}\nbutton:active {\n  background-color: var(--textTranslucent);\n  border: 0.1px solid var(--crust);\n}\nbutton:disabled {\n  cursor: not-allowed;\n}\n\na:link {\n  color: var(--text);\n}\na:visited {\n  color: var(--mauve);\n}\na:hover {\n  color: var(--lavender);\n}\na:active {\n  color: var(--text);\n}\n\nhtml { width: 100%; }\nbody {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 16px;\n  background-color: var(--base);\n  color: var(--text);\n  font-family: 'space-reg';\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\nheader {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\nheader img {\n  height: 80px;\n}\n\nmain {\n  margin-top: 16px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n\n#catOrigins {\n  width: calc(100% - 32px);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  margin-left: 16px;\n  margin-right: 16px;\n}\n#catOrigins div {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n#catOrigins div h1 {\n  margin-bottom: -8px;\n  align-self: flex-start;\n}\n#catOrigins div p {\n  font-size: 1rem;\n  align-self: flex-start;\n  text-align: start;\n}\n#catOrigins div button {\n  font-size: 1rem;\n  align-self: center;\n}\n\n#catOriginsVidContainer {\n  background-color: var(--textTranslucent);\n  padding: 4px;\n  border: 0.1px solid var(--crust);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  z-index: 99; \n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),\n                    0 1px 4px 1px rgba(0,0,0,0.22),\n                    0 0 0 1px rgba(0, 0, 0, 0.0);\n}\n#catOriginsVid {\n  width: 100%;\n  border-radius: 12px;\n  opacity: 0.77;\n}\n\n#catCollage {\n  margin-top: 48px;\n  width: calc(100% - 32px);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 16px;\n  margin-left: 16px;\n  margin-right: 16px;\n}\n#catCollage img {\n  width: 432px;\n  opacity: 0.77;\n}\n#catCollage button {\n  font-size: 1rem;\n}\n\n#howToBuy {\n  margin-top: 48px;\n  width: calc(100% - 32px);\n  max-width: 1024px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  margin-left: 16px;\n  margin-right: 16px;\n}\n#howToBuy .header {\n  margin-top: 0;\n  margin-bottom: 16px;\n  align-self: center; \n}\n#howToBuy .steps {\n  margin-top: -16px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 16px;\n  grid-row-gap: 16px;\n}\n#howToBuy .steps .stepContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n  border-radius: 12px;\n  background-color: var(--textTranslucent);\n  border: 0.1px solid var(--crust);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),\n                    0 1px 4px 1px rgba(0,0,0,0.22),\n                    0 0 0 1px rgba(0, 0, 0, 0.0);\n}\n.stepContainer .stepIcon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  margin-top: 16px;\n}\n.stepContainer .stepHeader {\n  margin-top: 8px;\n  font-size: 1.4rem;\n}\n.stepContainer .stepSpan {\n  font-size: 1rem;\n  text-align: center;\n}\n\n#buyContainer {\n  margin-top: 16px;\n  border: 0.1px solid var(--crust);\n  padding: 12px;\n  border-radius: 12px;\n  background-color: var(--textTranslucent);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),\n                    0 1px 4px 1px rgba(0,0,0,0.22),\n                    0 0 0 1px rgba(0, 0, 0, 0.0);\n}\n\n#glossary {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 48px;\n  width: calc(100% - 32px);\n  max-width: 1024px;\n  height: 720px;\n  padding-top: 16px;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-bottom: 0;\n  border-radius: 12px;\n  background-color: var(--textTranslucent);\n  border-top: 0.1px solid var(--crust);\n  border-left: 0.1px solid var(--crust);\n  border-right: 0.1px solid var(--crust);\n  border-bottom: none;\n  position: relative;\n  --fade-opacity: 1;\n}\n#glossary::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  margin-bottom: -1px;\n  border-radius: 12px;\n  left: 0;\n  width: 100%;\n  height: 96px;\n  background: linear-gradient(to bottom, rgba(35, 38, 52, 0) 0%, #232634 100%);\n  pointer-events: none;\n  opacity: var(--fade-opacity);\n  transition: opacity 0.3s ease;\n}\n#doubleGlossaryContainer {\n  width: 100%;\n  height: 100%;\n  padding: 4px;\n  margin-top: 32px;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  gap: 16px;\n  background: none; \n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-bottom: 16px;\n}\n#glossaryHeader {\n  margin-top: 0;\n}\n#glossaryDesc {\n  font-size: 1rem;\n}\n#doubleGlossaryContainer .letters {\n  font-size: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  border: 0.1px solid var(--crust);\n  padding: 16px;\n  border-radius: 12px;\n  background-color: var(--textTranslucent);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),\n                    0 1px 4px 1px rgba(0,0,0,0.22),\n                    0 0 0 1px rgba(0, 0, 0, 0.0); \n}\n.letterHeader {\n  align-self: center;\n}\n.acronymContainer {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.glossaryHeader {\n  align-self: flex-start;\n}\n.glossaryMeaning {\n  align-self: flex-start;\n  text-align: end;\n}\n\n#catLord {\n  margin-top: 48px;\n  width: calc(100% - 32px);\n  max-width: 1024px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 48px;\n}\n#catLord img {\n  width: 50%;\n  border-radius: 12px;\n  opacity: 0.77;\n}\n#catLordText {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: end;\n  gap: 24px;\n}\n#catLordText div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n#catLordText div span {\n  font-size: 2rem;\n  align-self: flex-start;\n}\n#catLordText div button {\n  font-size: 1rem;\n  align-self: flex-end;\n}\n\n#memeGenContainer {\n  margin-top: 48px;\n  width: calc(100% - 32px);\n  max-width: 1024px;\n  background-color: var(--textTranslucent);\n  padding: 16px;\n  border: 0.1px solid var(--crust);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),\n                    0 1px 4px 1px rgba(0,0,0,0.22),\n                    0 0 0 1px rgba(0, 0, 0, 0.0);\n}\n\n#memeGenContainer .infoH1 {\n  align-self: flex-start;\n  font-size: 2rem;\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n\n#memeGenContainer button {\n  background-color: var(--baseTranslucent);\n  color: var(--text);\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  font-size: 1rem;\n}\n#memeGenContainer button:hover {\n  background-color: var(--textTranslucent);\n}\n#memeGenContainer button:active {\n  background-color: var(--baseTranslucent);\n}\n\n#memeGenContainer .uploadActions {\n  position: absolute;\n  top: 20px;\n  right: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}\n\n#memeGenContainer .uploadActions #downloadBtn {\n  color: var(--green);\n}\n#memeGenContainer .uploadActions #downloadBtn:hover {\n  background-color: rgba(166, 227, 161, 0.25);\n}\n#memeGenContainer .uploadActions #downloadBtn:active {\n  background-color: var(--baseTranslucent);\n}\n\n#memeGenContainer canvas {\n  width: 100%;\n  border: 0.1px solid var(--crust);\n  border-radius: 12px;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),\n                    0 1px 4px 1px rgba(0,0,0,0.22),\n                    0 0 0 1px rgba(0, 0, 0, 0.0);\n}\n\n#textBoxInput {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n  width: 256px;\n  height: 64px;\n  border: 0.1px solid var(--crust);\n  border-radius: 12px;\n  cursor: text;\n  background-color: var(--baseTranslucent);\n  color: var(--text);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  font-family: 'space-bold';\n  font-size: 1rem;\n  text-align: start;\n}\n#textBoxInput::placeholder {\n  text-align: center;\n  color: var(--text);\n  font-family: 'space-bold-italic';\n}\n\n#rotateDegInput {\n  position: absolute;\n  bottom: 16px;\n  left: 16px;\n  width: 256px;\n  height: 64px;\n  border: 0.1px solid var(--crust);\n  border-radius: 12px;\n  cursor: text;\n  background-color: var(--baseTranslucent);\n  color: var(--text);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  font-family: 'space-bold';\n  font-size: 1rem;\n  text-align: end;\n}\n#rotateDegInput::placeholder {\n  text-align: center;\n  color: var(--text);\n  font-family: 'space-bold-italic';\n}\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\ninput[type=number] {\n  appearance: textfield;\n  -moz-appearance: textfield;\n}\n\n.imgAct-selected {\n  background-color: var(--lavenderTranslucent) !important;\n  color: var(--base) !important;\n}\n.imgAct-disabled {\n  opacity: 0.5;\n}\n\n#memeGenContainer .imgActions {\n  margin-top: 16px;\n  align-self: flex-end;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 8px;\n  grid-row-gap: 8px; \n}\n#memeGenContainer .imgActions button {\n  font-family: 'space-bold';\n  font-size: 0.77rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: start;\n  align-items: center;\n}\n\n#actionAcceptBtn {\n  background-color: var(--greenTranslucent) !important;\n  color: var(--base) !important;\n  position: absolute;\n  padding: 8px;\n  bottom: 0;\n  right: 0;\n  margin-bottom: 54px;\n  margin-right: 436px;\n}\n\n#actionRejectBtn {\n  background-color: var(--redTranslucent) !important;\n  color: var(--base) !important;\n  position: absolute;\n  padding: 8px;\n  bottom: 0;\n  right: 0;\n  margin-bottom: 16px;\n  margin-right: 436px;\n}\n\n#catWatchText {\n  margin-top: 48px;\n  font-family: 'space-bold';\n  font-size: 2rem;\n}\n#catWatchImg {\n  width: 200px;\n  padding-bottom: 144px;\n}\n\nfooter {\n  position: fixed;\n  bottom: 16px;\n  left: 16px;\n  width: calc(100% - 32px);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  z-index: 99;\n}\n\n#footerBtns {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n\n#footerBtns button {\n  font-size: 1rem;\n}\n\n.socials {\n  position: absolute;\n  bottom: 132px;\n  left: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  z-index: 90;\n}\n\n#telegramBtn {\n  color: var(--sapphire);\n}\n#telegramBtn:hover {\n  background-color: rgba(116, 199, 236, 0.25);\n}\n#telegramBtn:active {\n  background-color: var(--textTranslucent);\n}\n#twitterBtn {\n  color: var(--blue);\n}\n#twitterBtn:hover {\n  background-color: rgba(137, 180, 250, 0.25);\n}\n#twitterBtn:active {\n  background-color: var(--textTranslucent);\n}\n#tiktokBtn {\n  color: var(--pink);\n}\n#tiktokBtn:hover {\n  background-color: rgba(245, 194, 231, 0.25);\n}\n#tiktokBtn:active {\n  background-color: var(--textTranslucent);\n}\n#youtubeBtn {\n  color: var(--red);\n}\n#youtubeBtn:hover {\n  background-color: rgba(243, 139, 168, 0.25);\n}\n#youtubeBtn:active {\n  background-color: var(--textTranslucent);\n}\n\n.buyAction {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  z-index: 99;\n}\n\n.moreCharts {\n  position: absolute;\n  bottom: 132px;\n  right: 0;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 12px;\n  grid-row-gap: 12px; \n}\n\n#moreChartsBtn {\n  color: var(--lavender);\n}\n#moreChartsBtn:hover {\n  background-color: rgba(180, 190, 254, 0.25);\n}\n#moreChartsBtn:active {\n  background-color: var(--textTranslucent);\n  border: 0.1px solid transparent;\n}\n#buyBtn {\n  color: var(--green);\n}\n#buyBtn:hover {\n  background-color: rgba(166, 227, 161, 0.25);\n}\n#buyBtn:active {\n  background-color: var(--textTranslucent);\n}\n\n#footerAction {\n  width: calc(100% - 32px);\n  background-color: var(--textTranslucent);\n  padding: 16px;\n  border: 0.1px solid var(--crust);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  z-index: 99;\n}\n\n.contract {\n  display: flex;\n  flex-direction: row; \n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n}\n#contract {\n  font-family: 'space-reg';\n  font-size: 1rem;\n  word-break: break-all;\n  z-index: 99;\n}\n#copyCaBtn {\n  background-color: transparent;\n  font-family: 'space-bold';\n  font-size: 1rem;  \n  z-index: 99;\n}\n\n#musicBtn {\n  padding: 6px 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  font-size: 1rem;\n}\n#musicBtn img {\n  padding: 2px 0px;\n  width: 18px;\n  height: 20px;\n}\n\n#musicWidget {\n  position: fixed;\n  bottom: 80px;\n  right: 16px;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 12px;\n  grid-row-gap: 12px; \n  z-index: 1000;\n}\n#musicWidget button {\n  font-size: 1rem;\n}\n\n@media screen and (max-width: 816px) {\n\n  body {\n    margin: 12px;\n  }\n\n  .blob-svg {\n    width: 368px;\n    height: 368px;\n  }\n\n  #catOrigins {\n    margin-top: -24px;\n    width: calc(100% - 4px);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    gap: 12px;\n  }\n  #catOrigins div {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  #catOrigins div h1 {\n    margin-bottom: -12px;\n    align-self: center;\n    font-size: 1.54rem;\n  }\n  #catOrigins div p {\n    font-size: 0.77rem;\n    align-self: center;\n    text-align: center;\n  }\n  #catOrigins div button {\n    font-size: 0.77rem;\n    align-self: center;\n  }\n\n  #catOriginsVidContainer {\n    background-color: var(--textTranslucent);\n    padding: 3px;\n    border: 0.1px solid var(--crust);\n    border-radius: 12px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    backdrop-filter: blur(20px);\n    -webkit-backdrop-filter: blur(20px);\n    z-index: 99; \n  }\n  #catOriginsVid {\n    width: 100%;\n    border-radius: 12px;\n    opacity: 0.77;\n  }\n\n  #catCollage {\n    margin-top: 24px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 24px;\n    margin-left: 12px;\n    margin-right: 12px;\n  }\n  #catCollage img {\n    width: 100%;\n    opacity: 0.77;\n  }\n  #catCollage button {\n    font-size: 0.77rem;\n  }\n\n  #howToBuy {\n    margin-top: 24px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    gap: 12px;\n    margin-left: 12px;\n    margin-right: 12px;\n  }\n  #howToBuy .header {\n    margin-top: 0;\n    margin-bottom: 12px;\n    align-self: center; \n    font-size: 1.54rem;\n  }\n  #howToBuy .steps {\n    margin-top: -12px;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(4, 1fr); \n    grid-column-gap: 12px;\n    grid-row-gap: 12px;\n  }\n  #howToBuy .steps .stepContainer {\n    padding: 12px;\n  }\n  .stepContainer .stepIcon {\n    top: 0;\n    margin-top: 12px;\n  }\n  .stepContainer .stepHeader {\n    margin-top: 8px;\n    font-size: 1rem;\n  }\n  .stepContainer .stepSpan {\n    font-size: 0.77rem;\n    text-align: center;\n  }\n  #buyContainer {\n    margin-top: 12px;\n    border: 0.1px solid var(--crust);\n    padding: 8px;\n    border-radius: 12px;\n    background-color: var(--textTranslucent);\n  }\n\n  #glossary {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 24px;\n    width: calc(100% - 24px);\n    height: 520px;\n    padding-top: 12px;\n    padding-left: 12px;\n    padding-right: 12px;\n    padding-bottom: 0;\n    border-radius: 12px;\n    background-color: var(--textTranslucent);\n    border: 0.1px solid var(--crust);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),\n    0 1px 4px 1px rgba(0,0,0,0.22),\n    0 0 0 1px rgba(0, 0, 0, 0.0); \n  }\n  #doubleGlossaryContainer {\n    width: 100%;\n    height: 100%;\n    padding: 4px;\n    margin-top: 16px;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    gap: 12px;\n    background: none; \n    overflow-x: hidden;\n    overflow-y: auto;\n    padding-bottom: 12px;\n  }\n  #glossaryHeader {\n    font-size: 1.54rem;\n    margin-top: 0;\n  }\n  #glossaryDesc {\n    margin-top: -16px;\n    font-size: 0.77rem;\n    text-align: center;\n  }\n  #doubleGlossaryContainer .letters {\n    gap: 6px;\n    padding: 12px;\n    font-size: 0.77rem;\n  }\n\n  #catLord {\n    margin-top: 24px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n  }\n  #catLord img {\n    width: 100%;\n    border-radius: 12px;\n    opacity: 0.77;\n  }\n  #catLordText {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 24px;\n  }\n  #catLordText div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  #catLordText div span {\n    font-size: 1.42rem;\n    align-self: center;\n  }\n  #catLordText div button {\n    font-size: 0.77rem;\n    align-self: center;\n  }\n\n  #memeGenContainer {\n    margin-top: 24px !important;\n    width: calc(100% - 24px) !important;\n    max-width: 1024px;\n    padding: 12px !important;\n  }\n\n  #memeGenContainer .infoH1 {\n    align-self: flex-start;\n    font-size: 1.42rem;\n    margin-top: -4px;\n    margin-bottom: 58px !important;\n  }\n\n  #memeGenContainer button {\n    font-size: 0.77rem;\n  }\n\n  #memeGenContainer .uploadActions {\n    position: absolute;\n    top: 52px;\n    right: 12px;\n    left: 12px;\n    gap: 8px;\n  }\n\n  #textBoxInput {\n    position: absolute;\n    bottom: 52px;\n    left: 12px;\n    width: 96px;\n    height: 112px;\n    text-align: start;\n  }\n\n  #rotateDegInput {\n    position: absolute;\n    bottom: 52px;\n    left: 12px;\n    width: 96px;\n    height: 112px;\n    border: 0.1px solid var(--crust);\n    border-radius: 12px;\n    cursor: text;\n    background-color: var(--baseTranslucent);\n    color: var(--text);\n    backdrop-filter: blur(20px);\n    -webkit-backdrop-filter: blur(20px);\n    font-family: 'space-bold';\n    font-size: 0.77rem;\n    text-align: end;\n  }\n\n  #memeGenContainer .imgActions {\n    width: 192px;\n    margin-top: 12px;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    grid-column-gap: 4px;\n    grid-row-gap: 4px;\n  }\n  #memeGenContainer .imgActions button {\n    text-align: start;\n  }\n\n  .memeAct-svg {\n    width: 12px !important;\n    height: 12px !important;\n  }\n\n  #actionAcceptBtn {\n    position: absolute;\n    padding: 8px 16px;\n    bottom: 0;\n    right: 0;\n    margin-bottom: 12px;\n    margin-right: 264px;\n  }\n  \n  #actionRejectBtn {\n    position: absolute;\n    padding: 8px 16px;\n    bottom: 0;\n    right: 0;\n    margin-bottom: 12px;\n    margin-right: 212px;\n  }\n\n  #catWatchText {\n    margin-top: 24px;\n    font-family: 'space-bold';\n    font-size: 1.54rem;\n    text-align: center;\n  }\n  #catWatchImg {\n    width: 200px;\n    padding-bottom: 160px;\n    opacity: 0.88;\n  }\n\n  footer {\n    position: fixed;\n    bottom: 12px;\n    left: 12px;\n    width: calc(100% - 24px);\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    z-index: 99;\n  }\n  \n  #footerBtns {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 12px;\n  }\n  \n  #footerBtns button {\n    font-size: 0.77rem;\n  }\n\n  .socials {\n    position: absolute;\n    bottom: 132px;\n    left: 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n    z-index: 90;\n  }\n\n  #contract {\n    width: 176px;\n    font-size: 0.77rem;\n  }\n  #copyCaBtn {\n    font-size: 0.77rem;\n    padding: 11px 8px;\n    border-radius: 8px;\n  }\n  \n  #musicBtn {\n    padding: 8px 12px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-size: 1rem;\n  }\n  #musicBtn img {\n    padding: 2px 0px;\n    width: 16px;\n    height: 20px;\n  }\n  \n  #musicWidget {\n    position: fixed;\n    bottom: 98px;\n    right: 12px;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-column-gap: 4px;\n    grid-row-gap: 4px; \n    z-index: 1000;\n    margin-left: 12px;\n  }\n  #musicWidget button {\n    font-size: 0.77rem;\n  }\n}"],
            sourceRoot: ""
        }]);
        const h = m
    }
    ,
    314: n=>{
        n.exports = function(n) {
            var e = [];
            return e.toString = function() {
                return this.map((function(e) {
                    var t = ""
                      , i = void 0 !== e[5];
                    return e[4] && (t += "@supports (".concat(e[4], ") {")),
                    e[2] && (t += "@media ".concat(e[2], " {")),
                    i && (t += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")),
                    t += n(e),
                    i && (t += "}"),
                    e[2] && (t += "}"),
                    e[4] && (t += "}"),
                    t
                }
                )).join("")
            }
            ,
            e.i = function(n, t, i, a, o) {
                "string" == typeof n && (n = [[null, n, void 0]]);
                var r = {};
                if (i)
                    for (var A = 0; A < this.length; A++) {
                        var s = this[A][0];
                        null != s && (r[s] = !0)
                    }
                for (var l = 0; l < n.length; l++) {
                    var c = [].concat(n[l]);
                    i && r[c[0]] || (void 0 !== o && (void 0 === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")),
                    c[5] = o),
                    t && (c[2] ? (c[1] = "@media ".concat(c[2], " {").concat(c[1], "}"),
                    c[2] = t) : c[2] = t),
                    a && (c[4] ? (c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}"),
                    c[4] = a) : c[4] = "".concat(a)),
                    e.push(c))
                }
            }
            ,
            e
        }
    }
    ,
    417: n=>{
        n.exports = function(n, e) {
            return e || (e = {}),
            n ? (n = String(n.__esModule ? n.default : n),
            /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
            e.hash && (n += e.hash),
            /["'() \t\n]|(%20)/.test(n) || e.needQuotes ? '"'.concat(n.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : n) : n
        }
    }
    ,
    354: n=>{
        n.exports = function(n) {
            var e = n[1]
              , t = n[3];
            if (!t)
                return e;
            if ("function" == typeof btoa) {
                var i = btoa(unescape(encodeURIComponent(JSON.stringify(t))))
                  , a = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i)
                  , o = "/*# ".concat(a, " */");
                return [e].concat([o]).join("\n")
            }
            return [e].join("\n")
        }
    }
    ,
    72: n=>{
        var e = [];
        function t(n) {
            for (var t = -1, i = 0; i < e.length; i++)
                if (e[i].identifier === n) {
                    t = i;
                    break
                }
            return t
        }
        function i(n, i) {
            for (var o = {}, r = [], A = 0; A < n.length; A++) {
                var s = n[A]
                  , l = i.base ? s[0] + i.base : s[0]
                  , c = o[l] || 0
                  , d = "".concat(l, " ").concat(c);
                o[l] = c + 1;
                var p = t(d)
                  , m = {
                    css: s[1],
                    media: s[2],
                    sourceMap: s[3],
                    supports: s[4],
                    layer: s[5]
                };
                if (-1 !== p)
                    e[p].references++,
                    e[p].updater(m);
                else {
                    var g = a(m, i);
                    i.byIndex = A,
                    e.splice(A, 0, {
                        identifier: d,
                        updater: g,
                        references: 1
                    })
                }
                r.push(d)
            }
            return r
        }
        function a(n, e) {
            var t = e.domAPI(e);
            return t.update(n),
            function(e) {
                if (e) {
                    if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap && e.supports === n.supports && e.layer === n.layer)
                        return;
                    t.update(n = e)
                } else
                    t.remove()
            }
        }
        n.exports = function(n, a) {
            var o = i(n = n || [], a = a || {});
            return function(n) {
                n = n || [];
                for (var r = 0; r < o.length; r++) {
                    var A = t(o[r]);
                    e[A].references--
                }
                for (var s = i(n, a), l = 0; l < o.length; l++) {
                    var c = t(o[l]);
                    0 === e[c].references && (e[c].updater(),
                    e.splice(c, 1))
                }
                o = s
            }
        }
    }
    ,
    659: n=>{
        var e = {};
        n.exports = function(n, t) {
            var i = function(n) {
                if (void 0 === e[n]) {
                    var t = document.querySelector(n);
                    if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
                        try {
                            t = t.contentDocument.head
                        } catch (n) {
                            t = null
                        }
                    e[n] = t
                }
                return e[n]
            }(n);
            if (!i)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            i.appendChild(t)
        }
    }
    ,
    540: n=>{
        n.exports = function(n) {
            var e = document.createElement("style");
            return n.setAttributes(e, n.attributes),
            n.insert(e, n.options),
            e
        }
    }
    ,
    56: (n,e,t)=>{
        n.exports = function(n) {
            var e = t.nc;
            e && n.setAttribute("nonce", e)
        }
    }
    ,
    825: n=>{
        n.exports = function(n) {
            if ("undefined" == typeof document)
                return {
                    update: function() {},
                    remove: function() {}
                };
            var e = n.insertStyleElement(n);
            return {
                update: function(t) {
                    !function(n, e, t) {
                        var i = "";
                        t.supports && (i += "@supports (".concat(t.supports, ") {")),
                        t.media && (i += "@media ".concat(t.media, " {"));
                        var a = void 0 !== t.layer;
                        a && (i += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")),
                        i += t.css,
                        a && (i += "}"),
                        t.media && (i += "}"),
                        t.supports && (i += "}");
                        var o = t.sourceMap;
                        o && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")),
                        e.styleTagTransform(i, n, e.options)
                    }(e, n, t)
                },
                remove: function() {
                    !function(n) {
                        if (null === n.parentNode)
                            return !1;
                        n.parentNode.removeChild(n)
                    }(e)
                }
            }
        }
    }
    ,
    113: n=>{
        n.exports = function(n, e) {
            if (e.styleSheet)
                e.styleSheet.cssText = n;
            else {
                for (; e.firstChild; )
                    e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }
    }
    ,
    956: (n,e,t)=>{
        var i = t(72)
          , a = t.n(i)
          , o = t(825)
          , r = t.n(o)
          , A = t(659)
          , s = t.n(A)
          , l = t(56)
          , c = t.n(l)
          , d = t(540)
          , p = t.n(d)
          , m = t(113)
          , g = t.n(m)
          , C = t(208)
          , B = {};
        B.styleTagTransform = g(),
        B.setAttributes = c(),
        B.insert = s().bind(null, "head"),
        B.domAPI = r(),
        B.insertStyleElement = p(),
        a()(C.A, B),
        C.A && C.A.locals && C.A.locals;
        const u = t.p + "Roofcat.png"
          , h = t.p + "81541eacf1b3f4c2dd24.png"
          , x = t.p + "546265d3c59a46e16a1a.png"
          , b = t.p + "5a906ddfc76c585be23b.png"
          , f = t.p + "81bac280180dca459ff9.jpeg"
          , E = t.p + "c002e1c0f7b064f4b370.mp4"
          , v = t.p + "9390c9beee9d88a9086f.webp"
          , w = t.p + "de42cc6779943e69d3e8.mp3"
          , y = t.p + "6b620fa4f96838d1b446.mp3"
          , k = t.p + "58950ecd586ea129ddb8.mp3"
          , I = t.p + "b0c324e56a2be3d4f338.mp3"
          , L = t.p + "606f70dad174f4643c00.mp3"
          , T = t.p + "d2c0c826b77cf62ae351.mp3"
          , z = t.p + "895c6372594ec09a9abd.mp3"
          , H = document.querySelector("header")
          , M = document.createElement("img");
        M.src = u,
        H.appendChild(M);
        const j = document.querySelector("main")
          , S = document.createElement("div");
        S.id = "catOrigins";
        const W = document.createElement("div")
          , V = document.createElement("h1");
        V.innerHTML = "ROOFCAT CAT ORIGINS";
        const Y = document.createElement("p");
        Y.innerHTML = '\n  Roofcat Cat is one of the earliest known internet memes dating back to 2003 when\n  the original photograph of a ginger cat peering through a hole in the Roofcat was submitted\n  to <a href="https://knowyourmeme.com/memes/sites/funnyjunk" target="_blank">Funny Junk</a>. \n  Many variants of this image appeared on <a href="https://knowyourmeme.com/memes/sites/4chan" target="_blank">4chan\'s /b/</a>, \n  or random board, using the "cat in a hole" <a href="https://knowyourmeme.com/memes/exploitables" target="_blank">exploitable</a> \n  exploitable in a number of ways.';
      
        W.appendChild(V),
        W.appendChild(Y),

        S.appendChild(W),
        j.appendChild(S);
        const O = document.createElement("div");
        O.id = "catCollage";
        const R = document.createElement("img");
        R.src = b,
        O.appendChild(R);

        j.appendChild(O);
        const Z = document.createElement("div");
        Z.id = "catLord";
        const X = document.createElement("img");
        X.src = f;
        const q = document.createElement("div");
        q.id = "catLordText";
        const $ = document.createElement("div")
          , Q = document.createElement("span");
        Q.innerHTML = "Ceicat Memes",
        $.appendChild(Q);
     
        const P = document.createElement("div")
          , F = document.createElement("span");
       
        P.appendChild(F);

        q.appendChild(P),
        Z.appendChild(X),
        Z.appendChild(q),
        j.appendChild(Z);
        const _ = document.createElement("div");
        function J() {
            const n = document.createElement("span");
            n.classList.add("infoH1"),
            n.innerHTML = "Meme Generator",
            _.appendChild(n);
            const e = document.createElement("div");
            e.classList.add("uploadActions");
            const t = document.createElement("button");
            t.innerHTML = '<svg class="memeAct-svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 20px; height: 20px;"> <path d="M11 5V3h2v2h2v2h2v2h-2V7h-2v10h-2V7H9v2H7V7h2V5h2zM3 15v6h18v-6h-2v4H5v-4H3z" fill="currentColor"/> </svg> Backdrop',
            e.appendChild(t);
            const i = document.createElement("button");
            i.innerHTML = '<svg class="memeAct-svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 20px; height: 20px;"> <path d="M11 5V3h2v2h2v2h2v2h-2V7h-2v10h-2V7H9v2H7V7h2V5h2zM3 15v6h18v-6h-2v4H5v-4H3z" fill="currentColor"/> </svg> Image',
            e.appendChild(i);
            const a = document.createElement("button");
            a.innerHTML = '<svg class="memeAct-svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 20px; height: 20px;"> <path d="M13 17V3h-2v10H9v-2H7v2h2v2h2v2h2zm8 2v-4h-2v4H5v-4H3v6h18v-2zm-8-6v2h2v-2h2v-2h-2v2h-2z" fill="currentColor"/> </svg> Download',
            a.id = "downloadBtn",
            e.appendChild(a);
            const o = document.createElement("input");
            o.type = "file",
            o.accept = "image/*",
            o.style.display = "none",
            e.appendChild(o);
            const r = document.createElement("input");
            r.type = "file",
            r.accept = "image/*",
            r.style.display = "none",
            e.appendChild(r),
            _.appendChild(e);
            const A = document.createElement("canvas");
            A.width = 1024,
            A.height = 1024,
            _.appendChild(A);
            const s = document.createElement("div");
            s.classList.add("imgActions");
            const l = document.createElement("button");
            l.id = "actionAcceptBtn",
            l.disabled = !0,
            l.classList.add("imgAct-disabled"),
            l.innerHTML = '<svg class="memeAct-svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:16px;height:16px"> <path d="M18 6h2v2h-2V6zm-2 4V8h2v2h-2zm-2 2v-2h2v2h-2zm-2 2h2v-2h-2v2zm-2 2h2v-2h-2v2zm-2 0v2h2v-2H8zm-2-2h2v2H6v-2zm0 0H4v-2h2v2z" fill="currentColor"/> </svg>',
            s.appendChild(l);
            const c = document.createElement("button");
            c.id = "actionRejectBtn",
            c.disabled = !0,
            c.classList.add("imgAct-disabled"),
            c.innerHTML = '<svg class="memeAct-svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:16px;height:16px"> <path d="M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z" fill="currentColor"/> </svg>',
            s.appendChild(c);
            const d = document.createElement("button");
            d.id = "addTopTextBtn",
            d.innerHTML = '<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:16px;height:16px"> <path d="M19 4H3v2h16V4zm0 4H3v2h16V8zM3 12h8v2H3v-2zm8 4H3v2h8v-2zm7-1h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z" fill="currentColor"/> </svg> Top Text';
            const p = document.createElement("button");
            p.id = "addBottomTextBtn",
            p.innerHTML = '<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:16px;height:16px"> <path d="M19 5H3v2h16v6h-6v-2h2V9h-2v2h-2v2H9v2h2v2h2v2h2v-2h-2v-2h6v-2h2V7h-2V5zM7 13H3v2h4v-2zM3 9h6v2H3V9z" fill="currentColor"/> </svg> Bottom Text';
            const m = document.createElement("button");
            m.innerHTML = '<svg class="memeAct-svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:16px;height:16px"> <path d="M21 3h-8v2h4v2h2v4h2V3zm-4 4h-2v2h-2v2h2V9h2V7zm-8 8h2v-2H9v2H7v2h2v-2zm-4-2v4h2v2H5h6v2H3v-8h2z" fill="currentColor"/> </svg> Resize';
            const g = document.createElement("button");
            g.innerHTML = '<svg class="memeAct-svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:16px;height:16px"> <path d="M13 0h-2v2H9v2H7v2h2V4h2v7H4V9h2V7H4v2H2v2H0v2h2v2h2v2h2v-2H4v-2h7v7H9v-2H7v2h2v2h2v2h2v-2h2v-2h2v-2h-2v2h-2v-7h7v2h-2v2h2v-2h2v-2h2v-2h-2V9h-2V7h-2v2h2v2h-7V4h2v2h2V4h-2V2h-2V0z" fill="currentColor"/> </svg> Move';
            const C = document.createElement("button");
            C.innerHTML = '<svg class="memeAct-svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:16px;height:16px"> <path d="M4 9V7h12V5h2v2h2v2h-2v2h-2V9H4zm12 2h-2v2h2v-2zm0-6h-2V3h2v2zm4 12v-2H8v-2h2v-2H8v2H6v2H4v2h2v2h2v2h2v-2H8v-2h12z" fill="currentColor"/> </svg> Rotate';
            const B = document.createElement("button");
            B.innerHTML = '<svg class="memeAct-svg" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width:16px;height:16px"> <path d="M16 2v4h6v2h-2v14H4V8H2V6h6V2h8zm-2 2h-4v2h4V4zm0 4H6v12h12V8h-4zm-5 2h2v8H9v-8zm6 0h-2v8h2v-8z" fill="currentColor"/> </svg> Delete',
            s.appendChild(d),
            s.appendChild(m),
            s.appendChild(C),
            s.appendChild(p),
            s.appendChild(g),
            s.appendChild(B),
            _.appendChild(s);
            const u = document.createElement("textarea");
            u.id = "textBoxInput",
            u.setAttribute("type", "text"),
            u.placeholder = "Enter Text.",
            u.style.resize = "none",
            u.rows = 2,
            u.style.display = "none",
            _.appendChild(u);
            const h = document.createElement("textarea");
            h.id = "rotateDegInput",
            h.setAttribute("type", "number"),
            h.placeholder = "Enter Rotation\nin degrees.",
            h.style.resize = "none",
            h.rows = 2,
            h.style.display = "none",
            _.appendChild(h),
            h.addEventListener("input", (function() {
                this.value = this.value.replace(/[^0-9\-]+/g, "")
            }
            ));
            const b = A.getContext("2d")
              , f = [];
            let E = null
              , w = null
              , y = null
              , k = null
              , I = null
              , L = null
              , T = null
              , z = null
              , H = ""
              , M = "";
            function j(n) {
                const e = new Image;
                e.src = n,
                e.onload = ()=>{
                    z = e,
                    W()
                }
            }
            T ? z = T : j(v);
            let S = !1;
            function W() {
                var n;
                b.clearRect(0, 0, A.width, A.height),
                z && b.drawImage(z, 0, 0, A.width, A.height),
                S || (n = x,
                new Promise(((e,t)=>{
                    const i = new Image;
                    i.onload = ()=>e(i),
                    i.onerror = t,
                    i.src = n
                }
                ))).then((n=>{
                    const e = (A.width - 200) / 2;
                    L = {
                        img: n,
                        x: e,
                        y: 52,
                        rotationAngle: 0,
                        width: 200,
                        height: 125
                    },
                    f.push(L),
                    S = !0,
                    W()
                }
                )),
                f.forEach((n=>{
                    b.save();
                    const e = n.x + (n.width || n.img.width) / 2
                      , t = n.y + (n.height || n.img.height) / 2;
                    b.translate(e, t),
                    n.rotationAngle && b.rotate(n.rotationAngle * Math.PI / 180),
                    b.drawImage(n.img, -(n.width || n.img.width) / 2, -(n.height || n.img.height) / 2, n.width || n.img.width, n.height || n.img.height),
                    b.restore()
                }
                )),
                new FontFace("Impact","url(/fonts/impact.ttf)").load().then((function(n) {
                    document.fonts.add(n)
                }
                )).catch((function(n) {
                    console.error("Failed to load font: ", n)
                }
                )),
                H && (b.font = "48px Impact",
                b.textAlign = "center",
                b.lineWidth = 8,
                b.strokeStyle = "black",
                b.fillStyle = "white",
                b.strokeText(H, A.width / 2, 52),
                b.fillText(H, A.width / 2, 52)),
                M && (b.font = "48px Impact",
                b.textAlign = "center",
                b.lineWidth = 8,
                b.strokeStyle = "black",
                b.fillStyle = "white",
                b.strokeText(M, A.width / 2, A.height - 16),
                b.fillText(M, A.width / 2, A.height - 16))
            }
            function V() {
                "move" === y ? (console.log("Move mode deactivated."),
                A.style.cursor = "default",
                g.classList.remove("imgAct-selected"),
                l.classList.add("imgAct-disabled"),
                c.classList.add("imgAct-disabled"),
                l.disabled = !0,
                c.disabled = !0,
                m.disabled = !1,
                m.classList.remove("imgAct-disabled"),
                C.disabled = !1,
                C.classList.remove("imgAct-disabled"),
                B.disabled = !1,
                B.classList.remove("imgAct-disabled"),
                d.disabled = !1,
                d.classList.remove("imgAct-disabled"),
                p.disabled = !1,
                p.classList.remove("imgAct-disabled"),
                A.removeEventListener("mousedown", Q),
                A.removeEventListener("mousemove", U),
                A.removeEventListener("mouseup", P),
                A.removeEventListener("touchstart", F),
                A.removeEventListener("touchmove", N),
                A.removeEventListener("touchend", J)) : "resize" === y ? (y = null,
                console.log("Resize mode deactivated."),
                A.style.cursor = "default",
                m.classList.remove("imgAct-selected"),
                l.classList.add("imgAct-disabled"),
                c.classList.add("imgAct-disabled"),
                l.disabled = !0,
                c.disabled = !0,
                g.disabled = !1,
                g.classList.remove("imgAct-disabled"),
                C.disabled = !1,
                C.classList.remove("imgAct-disabled"),
                B.disabled = !1,
                B.classList.remove("imgAct-disabled"),
                d.disabled = !1,
                d.classList.remove("imgAct-disabled"),
                p.disabled = !1,
                p.classList.remove("imgAct-disabled"),
                A.removeEventListener("mousedown", R),
                A.removeEventListener("mousemove", G),
                A.removeEventListener("mouseup", Z),
                A.removeEventListener("touchstart", X),
                A.removeEventListener("touchmove", q),
                A.removeEventListener("touchend", $),
                O = !1) : "delete" === y ? en() : "rotate" === y ? gn() : "textTopMode" === y ? (u.style.display = "none",
                u.value = "",
                y = null,
                console.log("Text Top mode deactivated."),
                C.classList.remove("imgAct-selected"),
                l.classList.add("imgAct-disabled"),
                c.classList.add("imgAct-disabled"),
                p.disabled = !1,
                p.classList.remove("imgAct-disabled"),
                m.disabled = !1,
                m.classList.remove("imgAct-disabled"),
                g.disabled = !1,
                g.classList.remove("imgAct-disabled"),
                C.disabled = !1,
                C.classList.remove("imgAct-disabled"),
                B.disabled = !1,
                B.classList.remove("imgAct-disabled")) : "textBottomMode" === y && (u.style.display = "none",
                u.value = "",
                y = null,
                console.log("Text Top mode deactivated."),
                C.classList.remove("imgAct-selected"),
                l.classList.add("imgAct-disabled"),
                c.classList.add("imgAct-disabled"),
                d.disabled = !1,
                d.classList.remove("imgAct-disabled"),
                m.disabled = !1,
                m.classList.remove("imgAct-disabled"),
                g.disabled = !1,
                g.classList.remove("imgAct-disabled"),
                C.disabled = !1,
                C.classList.remove("imgAct-disabled"),
                B.disabled = !1,
                B.classList.remove("imgAct-disabled")),
                y = null
            }
            d.addEventListener("click", (function() {
                y = "textTopMode",
                u.style.display = "block",
                l.classList.remove("imgAct-disabled"),
                c.classList.remove("imgAct-disabled"),
                l.disabled = !1,
                c.disabled = !1,
                p.disabled = !0,
                p.classList.add("imgAct-disabled"),
                m.disabled = !0,
                m.classList.add("imgAct-disabled"),
                g.disabled = !0,
                g.classList.add("imgAct-disabled"),
                C.disabled = !0,
                C.classList.add("imgAct-disabled"),
                B.disabled = !0,
                B.classList.add("imgAct-disabled")
            }
            )),
            p.addEventListener("click", (function() {
                y = "textBottomMode",
                u.style.display = "block",
                l.classList.remove("imgAct-disabled"),
                c.classList.remove("imgAct-disabled"),
                l.disabled = !1,
                c.disabled = !1,
                d.disabled = !0,
                d.classList.add("imgAct-disabled"),
                m.disabled = !0,
                m.classList.add("imgAct-disabled"),
                g.disabled = !0,
                g.classList.add("imgAct-disabled"),
                C.disabled = !0,
                C.classList.add("imgAct-disabled"),
                B.disabled = !0,
                B.classList.add("imgAct-disabled")
            }
            ));
            let Y, D, O = !1;
            function R(n) {
                const e = A.getBoundingClientRect()
                  , t = A.width / e.width
                  , i = A.height / e.height
                  , a = (n.clientX - e.left) * t
                  , o = (n.clientY - e.top) * i;
                k = null,
                f.forEach(((n,e)=>{
                    const t = n.width || n.img.width
                      , i = n.height || n.img.height;
                    console.log(`Checking image ${e} at (${n.x}, ${n.y}) with width ${t} and height ${i}`),
                    a >= n.x && a <= n.x + t && o >= n.y && o <= n.y + i && (k = n,
                    Y = a,
                    D = o,
                    console.log(`Image ${e} selected for movement.`),
                    O = !0,
                    w = n,
                    w.originalWidth = t,
                    w.originalHeight = i)
                }
                )),
                k || (console.log("No image was selected for resizing."),
                O = !1)
            }
            function G(n) {
                if (!k || !O)
                    return;
                const e = A.getBoundingClientRect()
                  , t = A.width / e.width
                  , i = A.height / e.height
                  , a = (n.clientX - e.left) * t
                  , o = (n.clientY - e.top) * i
                  , r = a - Y
                  , s = o - D;
                k.width = w.originalWidth + r > 0 ? w.originalWidth + r : 1,
                k.height = w.originalHeight + s > 0 ? w.originalHeight + s : 1,
                W()
            }
            function Z() {
                k && (O = !1),
                k = null
            }
            function X(n) {
                n.preventDefault();
                const e = n.touches[0]
                  , t = A.getBoundingClientRect()
                  , i = A.width / t.width
                  , a = A.height / t.height
                  , o = (e.clientX - t.left) * i
                  , r = (e.clientY - t.top) * a;
                k = null,
                f.forEach(((n,e)=>{
                    const t = n.width || n.img.width
                      , i = n.height || n.img.height;
                    console.log(`Checking image ${e} at (${n.x}, ${n.y}) with width ${t} and height ${i}`),
                    o >= n.x && o <= n.x + t && r >= n.y && r <= n.y + i && (k = n,
                    Y = o,
                    D = r,
                    O = !0,
                    w = {
                        ...n,
                        originalWidth: t,
                        originalHeight: i
                    })
                }
                )),
                k || (O = !1)
            }
            function q(n) {
                if (n.preventDefault(),
                !k || !O)
                    return;
                const e = n.touches[0]
                  , t = A.getBoundingClientRect()
                  , i = A.width / t.width
                  , a = A.height / t.height
                  , o = (e.clientX - t.left) * i
                  , r = (e.clientY - t.top) * a
                  , s = o - Y
                  , l = r - D;
                k.width = w.originalWidth + s > 0 ? w.originalWidth + s : 1,
                k.height = w.originalHeight + l > 0 ? w.originalHeight + l : 1,
                W()
            }
            function $() {
                k && (O = !1),
                k = null
            }
            function Q(n) {
                const e = A.getBoundingClientRect()
                  , t = A.width / e.width
                  , i = A.height / e.height
                  , a = (n.clientX - e.left) * t
                  , o = (n.clientY - e.top) * i;
                console.log(`Mouse down position: x=${a}, y=${o}`),
                k = null,
                f.forEach(((n,e)=>{
                    const t = n.width || n.img.width
                      , i = n.height || n.img.height;
                    console.log(`Checking image ${e} at (${n.x}, ${n.y}) with width ${t} and height ${i}`),
                    a >= n.x && a <= n.x + t && o >= n.y && o <= n.y + i && (k = n,
                    Y = a - n.x,
                    D = o - n.y,
                    console.log(`Image ${e} selected for movement.`),
                    E = n)
                }
                )),
                k || console.log("No image was selected for movement.")
            }
            function U(n) {
                if (!k)
                    return;
                const e = A.getBoundingClientRect()
                  , t = A.width / e.width
                  , i = A.height / e.height
                  , a = (n.clientX - e.left) * t
                  , o = (n.clientY - e.top) * i;
                k.x = a - Y,
                k.y = o - D,
                console.log(`Moving image to x=${k.x}, y=${k.y}`),
                W()
            }
            function P() {
                k && console.log(`Movement stopped for selected image at x=${k.x}, y=${k.y}`),
                k = null
            }
            function F(n) {
                n.preventDefault();
                const e = n.touches[0]
                  , t = A.getBoundingClientRect()
                  , i = A.width / t.width
                  , a = A.height / t.height
                  , o = (e.clientX - t.left) * i
                  , r = (e.clientY - t.top) * a;
                console.log(`Touch start position: x=${o}, y=${r}`),
                k = null,
                f.forEach(((n,e)=>{
                    const t = n.width || n.img.width
                      , i = n.height || n.img.height;
                    console.log(`Checking image ${e} at (${n.x}, ${n.y}) with width ${t} and height ${i}`),
                    o >= n.x && o <= n.x + t && r >= n.y && r <= n.y + i && (k = n,
                    Y = o - n.x,
                    D = r - n.y,
                    E = n)
                }
                )),
                k || console.log("No image was selected for movement.")
            }
            function N(n) {
                if (n.preventDefault(),
                !k)
                    return;
                const e = n.touches[0]
                  , t = A.getBoundingClientRect()
                  , i = A.width / t.width
                  , a = A.height / t.height
                  , o = (e.clientX - t.left) * i
                  , r = (e.clientY - t.top) * a;
                k.x = o - Y,
                k.y = r - D,
                console.log(`Moving image to x=${k.x}, y=${k.y}`),
                W()
            }
            function J() {
                k && console.log(`Movement stopped for selected image at x=${k.x}, y=${k.y}`),
                k = null
            }
            let K = null;
            function nn() {
                y = "delete",
                B.classList.add("imgAct-selected"),
                A.style.cursor = "pointer",
                l.disabled = !1,
                l.classList.remove("imgAct-disabled"),
                c.disabled = !1,
                c.classList.remove("imgAct-disabled"),
                m.disabled = !0,
                m.classList.add("imgAct-disabled"),
                g.disabled = !0,
                g.classList.add("imgAct-disabled"),
                C.disabled = !0,
                C.classList.add("imgAct-disabled"),
                d.disabled = !0,
                d.classList.add("imgAct-disabled"),
                p.disabled = !0,
                p.classList.add("imgAct-disabled")
            }
            function en() {
                K = null,
                y = null,
                B.classList.remove("imgAct-selected"),
                A.style.cursor = "default",
                l.disabled = !0,
                l.classList.add("imgAct-disabled"),
                c.disabled = !0,
                c.classList.add("imgAct-disabled"),
                m.disabled = !1,
                m.classList.remove("imgAct-disabled"),
                g.disabled = !1,
                g.classList.remove("imgAct-disabled"),
                C.disabled = !1,
                C.classList.remove("imgAct-disabled"),
                d.disabled = !1,
                d.classList.remove("imgAct-disabled"),
                p.disabled = !1,
                p.classList.remove("imgAct-disabled"),
                W()
            }
            A.addEventListener("click", (function(n) {
                if ("delete" === y) {
                    const e = A.getBoundingClientRect()
                      , t = A.width / e.width
                      , i = A.height / e.height
                      , a = (n.clientX - e.left) * t
                      , o = (n.clientY - e.top) * i;
                    let r = !1;
                    f.forEach((n=>{
                        a >= n.x && a <= n.x + (n.width || n.img.width) && o >= n.y && o <= n.y + (n.height || n.img.height) && (K = n,
                        r = !0)
                    }
                    )),
                    r || function(n, e) {
                        const t = A.height - 16;
                        H && e <= 72 && e >= 32 && n >= A.width / 2 - 50 && n <= A.width / 2 + 50 && (H = "",
                        W()),
                        M && e >= t - 20 && e <= t + 20 && n >= A.width / 2 - 50 && n <= A.width / 2 + 50 && (M = "",
                        W())
                    }(a, o)
                }
            }
            )),
            B.addEventListener("click", (()=>{
                "delete" !== y && (V(),
                nn())
            }
            )),
            l.addEventListener("click", (()=>{
                "textTopMode" === y ? (H = u.value,
                W(),
                V()) : "textBottomMode" === y && (M = u.value,
                W(),
                V()),
                "delete" === y && (function() {
                    if (K && K !== L) {
                        const n = f.indexOf(K);
                        n > -1 && f.splice(n, 1),
                        W(),
                        K = null
                    }
                }(),
                en()),
                "rotate" === y && gn(),
                console.log("Accept clicked, current mode: ", y),
                V(),
                console.log("deactiving mode, current mode: ", y)
            }
            )),
            c.addEventListener("click", (()=>{
                console.log("Reject clicked, current mode: ", y),
                "move" === y && E && (E.x = E.img.x,
                E.y = E.img.y,
                W()),
                "resize" === y && w && (console.log(w.img.width),
                console.log(w.width),
                console.log("Resetting to original size:", w.originalWidth, "x", w.originalHeight),
                w.img.width = w.originalWidth,
                w.img.height = w.originalHeight,
                w.width = w.originalWidth,
                w.height = w.originalHeight,
                W()),
                "delete" === y && (K = null,
                en()),
                "rotate" === y && (I && (I.rotationAngle = I.originalRotation || 0,
                W()),
                gn()),
                V(),
                console.log("deactiving mode, current mode: ", y)
            }
            )),
            g.addEventListener("click", (()=>{
                "move" !== y && (V(),
                y = "move",
                l.disabled = !1,
                l.classList.remove("imgAct-disabled"),
                c.disabled = !1,
                c.classList.remove("imgAct-disabled"),
                g.classList.add("imgAct-selected"),
                A.style.cursor = "move",
                m.disabled = !0,
                m.classList.add("imgAct-disabled"),
                C.disabled = !0,
                C.classList.add("imgAct-disabled"),
                B.disabled = !0,
                B.classList.add("imgAct-disabled"),
                d.disabled = !0,
                d.classList.add("imgAct-disabled"),
                p.disabled = !0,
                p.classList.add("imgAct-disabled"),
                A.addEventListener("mousedown", Q),
                A.addEventListener("mousemove", U),
                A.addEventListener("mouseup", P),
                A.addEventListener("touchstart", F),
                A.addEventListener("touchmove", N),
                A.addEventListener("touchend", J))
            }
            )),
            m.addEventListener("click", (()=>{
                "resize" !== y && (V(),
                y = "resize",
                l.disabled = !1,
                l.classList.remove("imgAct-disabled"),
                c.disabled = !1,
                c.classList.remove("imgAct-disabled"),
                m.classList.add("imgAct-selected"),
                A.style.cursor = "nesw-resize",
                g.disabled = !0,
                g.classList.add("imgAct-disabled"),
                C.disabled = !0,
                C.classList.add("imgAct-disabled"),
                B.disabled = !0,
                B.classList.add("imgAct-disabled"),
                d.disabled = !0,
                d.classList.add("imgAct-disabled"),
                p.disabled = !0,
                p.classList.add("imgAct-disabled"),
                A.addEventListener("mousedown", R),
                A.addEventListener("mousemove", G),
                A.addEventListener("mouseup", Z),
                A.addEventListener("touchstart", X),
                A.addEventListener("touchmove", q),
                A.addEventListener("touchend", $))
            }
            )),
            C.addEventListener("click", (()=>{
                "rotate" !== y && (V(),
                function() {
                    function n() {
                        if (I) {
                            const n = parseInt(this.value);
                            isNaN(n) || (I.rotationAngle = n,
                            W())
                        }
                    }
                    y = "rotate",
                    h.style.display = "block",
                    I && I.rotationAngle ? h.value = I.rotationAngle : h.value = "",
                    h.removeEventListener("input", n),
                    h.addEventListener("input", n),
                    l.disabled = !1,
                    l.classList.remove("imgAct-disabled"),
                    c.disabled = !1,
                    c.classList.remove("imgAct-disabled"),
                    C.classList.add("imgAct-selected"),
                    A.style.cursor = "grab",
                    g.disabled = !0,
                    g.classList.add("imgAct-disabled"),
                    m.disabled = !0,
                    m.classList.add("imgAct-disabled"),
                    B.disabled = !0,
                    B.classList.add("imgAct-disabled"),
                    A.addEventListener("mousedown", sn),
                    A.addEventListener("mousemove", ln),
                    A.addEventListener("mouseup", cn),
                    A.addEventListener("touchstart", dn),
                    A.addEventListener("touchmove", pn),
                    A.addEventListener("touchend", mn)
                }())
            }
            )),
            B.addEventListener("click", (()=>{
                "delete" !== y && (V(),
                nn())
            }
            ));
            let tn = !1
              , an = null
              , on = null;
            function rn(n, e, t, i) {
                const a = i - e
                  , o = t - n;
                return Math.atan2(a, o) * (180 / Math.PI)
            }
            function An(n, e) {
                I = null,
                f.forEach((t=>{
                    n >= t.x && n <= t.x + (t.width || t.img.width) && e >= t.y && e <= t.y + (t.height || t.img.height) && (I = t)
                }
                )),
                h.style.display = I ? "block" : "none",
                I && (h.value = I.rotationAngle || 0,
                I.originalRotation = I.rotationAngle || 0)
            }
            function sn(n) {
                const e = A.getBoundingClientRect()
                  , t = (n.clientX - e.left) * (A.width / e.width)
                  , i = (n.clientY - e.top) * (A.height / e.height);
                An(t, i),
                I && (an = t,
                on = i,
                tn = !0,
                I.startAngle = rn(I.x + (I.width || I.img.width) / 2, I.y + (I.height || I.img.height) / 2, t, i),
                I.currentRotation = I.rotationAngle || 0)
            }
            function ln(n) {
                if (!I || !tn)
                    return;
                const e = A.getBoundingClientRect()
                  , t = (n.clientX - e.left) * (A.width / e.width)
                  , i = (n.clientY - e.top) * (A.height / e.height)
                  , a = I.x + (I.width || I.img.width) / 2
                  , o = I.y + (I.height || I.img.height) / 2
                  , r = rn(a, o, t, i)
                  , s = rn(a, o, an, on);
                I.rotationAngle = I.currentRotation + (r - s),
                an = t,
                on = i,
                W()
            }
            function cn() {
                tn && I && (I.currentRotation = I.rotationAngle,
                tn = !1)
            }
            function dn(n) {
                n.preventDefault();
                const e = n.touches[0]
                  , t = A.getBoundingClientRect()
                  , i = (e.clientX - t.left) * (A.width / t.width)
                  , a = (e.clientY - t.top) * (A.height / t.height);
                An(i, a),
                I && (tn = !0,
                I.startAngle = rn(I.x + (I.width || I.img.width) / 2, I.y + (I.height || I.img.height) / 2, i, a) - I.rotationAngle)
            }
            function pn(n) {
                if (n.preventDefault(),
                !I || !tn)
                    return;
                const e = n.touches[0]
                  , t = A.getBoundingClientRect()
                  , i = (e.clientX - t.left) * (A.width / t.width)
                  , a = (e.clientY - t.top) * (A.height / t.height)
                  , o = rn(I.x + (I.width || I.img.width) / 2, I.y + (I.height || I.img.height) / 2, i, a);
                I.rotationAngle = o - I.startAngle,
                W()
            }
            function mn() {
                tn && I && (tn = !1)
            }
            function gn() {
                h.style.display = "none",
                h.removeEventListener("input", (function() {}
                )),
                y = null,
                console.log("Resize mode deactivated."),
                A.style.cursor = "default",
                C.classList.remove("imgAct-selected"),
                l.classList.add("imgAct-disabled"),
                c.classList.add("imgAct-disabled"),
                l.disabled = !0,
                c.disabled = !0,
                g.disabled = !1,
                g.classList.remove("imgAct-disabled"),
                m.disabled = !1,
                m.classList.remove("imgAct-disabled"),
                B.disabled = !1,
                B.classList.remove("imgAct-disabled"),
                A.removeEventListener("mousedown", sn),
                A.removeEventListener("mousemove", ln),
                A.removeEventListener("mouseup", cn),
                A.removeEventListener("touchstart", dn),
                A.removeEventListener("touchmove", pn),
                A.removeEventListener("touchend", mn),
                tn = !1
            }
            W(),
            o.addEventListener("change", (n=>{
                const e = n.target.files[0];
                if (e) {
                    const n = new FileReader;
                    n.onload = n=>{
                        const e = new Image;
                        e.src = n.target.result,
                        e.onload = ()=>{
                            T = e,
                            j(T.src)
                        }
                    }
                    ,
                    n.readAsDataURL(e)
                }
            }
            )),
            r.addEventListener("change", (n=>{
                const e = n.target.files[0];
                if (e) {
                    const n = new FileReader;
                    n.onload = n=>{
                        const e = new Image;
                        e.src = n.target.result,
                        e.onload = ()=>{
                            f.push({
                                img: e,
                                x: (A.width - e.width) / 2,
                                y: (A.height - e.height) / 2 + 20 * f.length
                            }),
                            W()
                        }
                    }
                    ,
                    n.readAsDataURL(e)
                }
                n.target.value = ""
            }
            )),
            t.addEventListener("click", (()=>{
                o.click()
            }
            )),
            i.addEventListener("click", (()=>{
                r.click()
            }
            )),
            a.addEventListener("click", (function() {
                const n = `${Math.floor(1e5 + 9e5 * Math.random())}-${(new Date).toISOString().split("T")[0]}.png`
                  , e = document.createElement("a");
                e.download = n,
                e.href = A.toDataURL(),
                e.click()
            }
            ))
        }
        _.id = "memeGenContainer",
        j.appendChild(_);
        const K = document.createElement("div");
        K.id = "howToBuy",
        j.appendChild(K);
        const nn = document.createElement("div");
        nn.id = "glossary",
        j.appendChild(nn);
        const en = document.createElement("span");
        en.id = "catWatchText",
        en.innerHTML = "DON'T FORGET Roofcat IS WATCHING YOU!",
        j.appendChild(en);
        const tn = document.createElement("img");
        tn.id = "catWatchImg",
        tn.src = x,
        j.appendChild(tn);
        const an = document.querySelector("footer")
          , on = document.createElement("div");
        on.id = "footerBtns";
        const rn = document.createElement("button");
        rn.innerHTML = "Socials...",
        rn.id = "socialsBtn",
        on.appendChild(rn);
        const An = document.createElement("div");
        An.classList.add("socials");
        const sn = document.createElement("button");
        sn.innerHTML = "Telegram",
        sn.id = "telegramBtn",
        An.appendChild(sn);
        const ln = document.createElement("button");
        ln.innerHTML = "Twitter",
        ln.id = "twitterBtn",
        An.appendChild(ln);
        const cn = document.createElement("button");
        cn.innerHTML = "Tiktok",
        cn.id = "tiktokBtn",
        An.appendChild(cn);
        const dn = document.createElement("button");
        dn.innerHTML = "YouTube",
        dn.id = "youtubeBtn",
        An.appendChild(dn),
        on.appendChild(An);
        const pn = document.createElement("div");
        pn.classList.add("buyAction");
        const mn = document.createElement("button");
        mn.innerHTML = "Charts & More...",
        mn.id = "moreChartsBtn",
        pn.appendChild(mn);
        const gn = document.createElement("div");
        gn.classList.add("moreCharts"),
        gn.style.display = "none";
        const Cn = document.createElement("button");
        Cn.innerHTML = "CMC",
        Cn.id = "cmcBtn",
        gn.appendChild(Cn);
        const Bn = document.createElement("button");
        Bn.innerHTML = "Coingecko",
        Bn.id = "coingeckoBtn",
        gn.appendChild(Bn);
        const un = document.createElement("button");
        un.innerHTML = "Dexscreener",
        gn.appendChild(un);
        const hn = document.createElement("button");
        hn.innerHTML = "Dextool",
        gn.appendChild(hn);
        const xn = document.createElement("button");
        xn.innerHTML = "Birdeye",
        gn.appendChild(xn);
        const bn = document.createElement("button");
        bn.innerHTML = "Solscan",
        gn.appendChild(bn),
        pn.appendChild(gn);
      
        on.appendChild(pn),
        an.appendChild(on);
        const En = document.createElement("div");
        En.id = "footerAction";
        const vn = document.createElement("div");
        vn.classList.add("contract");
        const wn = document.createElement("span");
        wn.innerHTML = "",
        wn.id = "contract",
        vn.appendChild(wn);
        const yn = document.createElement("button");
        yn.innerHTML = "Copy",
        yn.id = "copyCaBtn",
        vn.appendChild(yn),
        En.appendChild(vn),
        an.appendChild(En),
        document.addEventListener("DOMContentLoaded", (function() {
            !function() {
                const n = document.getElementById("backdropContainer")
                  , e = document.createElement("div");
                e.classList.add("blob"),
                e.innerHTML = '\n    <svg class="blob-svg" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <path class="blob-path" fill="#b4befe" d="M397,264Q355,288,348,314.5Q341,341,305.5,326.5Q270,312,255,325.5Q240,339,196,395.5Q152,452,154.5,387.5Q157,323,116.5,315.5Q76,308,41.5,274Q7,240,49,209Q91,178,116.5,160Q142,142,152,97.5Q162,53,201,33Q240,13,265.5,65Q291,117,294,150Q297,183,357.5,174.5Q418,166,428.5,203Q439,240,397,264Z" />\n    </svg>\n  ',
                n.appendChild(e)
            }(),
            function() {
                const n = document.createElement("div");
                n.id = "catOriginsVidContainer";
                const e = document.createElement("video");
                e.id = "catOriginsVid",
                e.src = E,
                e.autoplay = !0,
                e.muted = !0,
                e.controls = !0,
                n.appendChild(e),
                S.appendChild(n)
            }(),
            function() {
                const n = document.createElement("button");
                n.id = "musicBtn";
                const e = document.createElement("img");
                e.src = h,
                n.appendChild(e);
                const t = document.createElement("div");
                t.id = "musicWidget",
                t.style.display = "none",
                document.body.appendChild(t);
                let i = null;
                function a(n, e) {
                    const t = document.createElement("button");
                    t.innerHTML = n;
                    const a = new Audio(e);
                    return t.addEventListener("click", (function() {
                        i && i !== a && (i.pause(),
                        i.currentTime = 0),
                        a.play().catch((n=>{
                            console.log("Autoplay was prevented. Please interact with the page to play audio.", n)
                        }
                        )),
                        i = a
                    }
                    )),
                    {
                        button: t,
                        audio: a
                    }
                }
                const o = [a("Crypto Cat", w), a("Crypto King", y), a("Eyes", k), a("Fever", I), a("Sensation", L), a("Viral", T), a("Undervalued", z)];
                o.forEach((n=>{
                    t.appendChild(n.button)
                }
                )),
                o.forEach((n=>{
                    n.audio.loop = !1,
                    n.audio.volume = 1
                }
                ));
                let r = !1;
                n.addEventListener("click", (function() {
                    event.stopPropagation(),
                    r = !r,
                    r ? (t.style.display = "grid",
                    n.innerHTML = "X",
                    n.style.color = "var(--red)",
                    n.style.backgroundColor = "var(--textTranslucent)") : (t.style.display = "none",
                    n.innerHTML = "",
                    n.appendChild(e),
                    n.style.backgroundColor = "none")
                }
                )),
                document.addEventListener("click", (function(i) {
                    !r || t.contains(i.target) || n.contains(i.target) || (t.style.display = "none",
                    n.innerHTML = "",
                    n.appendChild(e),
                    n.style.color = "var(--lavender)",
                    n.style.backgroundColor = "var(--textTranslucent)",
                    r = !1)
                }
                )),
                En.appendChild(n),
                an.appendChild(En)
            }(),
            setTimeout(J, 1e3),
            function() {
                const n = document.createElement("h1");
                n.classList.add("header"),
                n.innerHTML = "How to buy $Roofcat?";
                const e = document.createElement("div");
                function t(n, t, i) {
                    this.container = document.createElement("div"),
                    this.container.classList.add("stepContainer"),
                    this.icon = document.createElement("div"),
                    this.icon.innerHTML = n,
                    this.icon.classList.add("stepIcon"),
                    this.container.appendChild(this.icon),
                    this.header = document.createElement("span"),
                    this.header.innerHTML = t,
                    this.header.classList.add("stepHeader"),
                    this.container.appendChild(this.header),
                    this.span = document.createElement("span"),
                    this.span.innerHTML = i,
                    this.span.classList.add("stepSpan"),
                    this.container.appendChild(this.span),
                    e.appendChild(this.container)
                }
                e.classList.add("steps"),
                new t('<svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 0H6V6H0V0ZM2 2V4H4V2H2Z" fill="#f5e0dc"/>\n</svg>',"Step 1",'Install a solana wallet like <a href="https://phantom.app/" target="_blank">Phantom Wallet</a>'),
                new t('<svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 0H6V6H0V0ZM2 2V4H4V2H2Z" fill="#f5e0dc"/>\n<path d="M8 0H14V6H8V0ZM10 2V4H12V2H10Z" fill="#f38ba8"/>\n</svg>',"Step 2","Acquire some $SOL to trade & transfer to wallet, come back here, and connect your solana wallet"),
                new t('<svg width="22" height="6" viewBox="0 0 22 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 0H6V6H0V0ZM2 2V4H4V2H2Z" fill="#f5e0dc"/>\n<path d="M8 0H14V6H8V0ZM10 2V4H12V2H10Z" fill="#f38ba8"/>\n<path d="M16 0H22V6H16V0ZM18 2V4H20V2H18Z" fill="#fab387"/>\n</svg>',"Step 3","Enter the amount of $SOL to buy with and click on Swap"),
                new t('<svg width="30" height="6" viewBox="0 0 30 6" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 0H6V6H0V0ZM2 2V4H4V2H2Z" fill="#f5e0dc"/>\n<path d="M8 0H14V6H8V0ZM10 2V4H12V2H10Z" fill="#f38ba8"/>\n<path d="M16 0H22V6H16V0ZM18 2V4H20V2H18Z" fill="#fab387"/>\n<path d="M24 0H30V6H24V0ZM26 2V4H28V2H26Z" fill="#a6e3a1"/>\n</svg>',"Step 4",'Accept transaction, welcome to the Roofcat Cat community! Join chat from "Socials..."');
                const i = document.createElement("div");
                i.id = "buyContainer";
                const a = document.createElement("script");
                a.src = "https://terminal.jup.ag/main-v1.js",
                a.setAttribute("data-preload", ""),
                a.async = !0,
                document.head.appendChild(a),
                a.onload = ()=>{
                  
                }
                ,
                K.appendChild(n),
                K.appendChild(e),
                K.appendChild(i)
            }(),
            function() {
                const n = document.createElement("h1");
                n.innerHTML = "Glossary",
                n.id = "glossaryHeader",
                nn.appendChild(n);
                const e = document.createElement("span");
                e.id = "glossaryDesc",
                e.innerHTML = "New to the space? Get yourself familiar with the lingo before jumping back in the trenches ^^",
                nn.appendChild(e);
                const t = {};
                let i = !0;
                const a = document.createElement("div");
                function o(n, e, o) {
                    t[n] || function(n) {
                        const e = document.createElement("div");
                        e.classList.add("letters"),
                        e.id = `letter_${n}`;
                        const o = document.createElement("div");
                        o.innerHTML = `*${n}*`,
                        o.classList.add("letterHeader"),
                        e.appendChild(o),
                        e.style.alignSelf = i ? "flex-start" : "flex-end",
                        i = !i,
                        t[n] = e,
                        a.appendChild(e)
                    }(n),
                    this.container = document.createElement("div"),
                    this.container.classList.add("acronymContainer"),
                    this.abbreviation = document.createElement("span"),
                    this.abbreviation.innerHTML = e,
                    this.abbreviation.classList.add("glossaryHeader"),
                    this.container.appendChild(this.abbreviation),
                    this.meaning = document.createElement("span"),
                    this.meaning.innerHTML = o,
                    this.meaning.classList.add("glossaryMeaning"),
                    this.container.appendChild(this.meaning),
                    t[n].appendChild(this.container)
                }
                a.id = "doubleGlossaryContainer",
                nn.appendChild(a),
                new o("A","Address","A string of alphanumeric characters used to receive cryptocurrencies"),
                new o("A","Airdrop","Distribution of free tokens to holders of a particular cryptocurrency"),
                new o("A","Altcoin","Any cryptocurrency other than Bitcoin"),
                new o("A","ATH (All-Time High)","The highest price ever reached by a cryptocurrency"),
                new o("A","ATL (All-Time Low)","The lowest price ever reached by a cryptocurrency"),
                new o("B","Bagholder","Someone holding a cryptocurrency that has fallen in value"),
                new o("B","Bear Market","A market condition where prices are falling or expected to fall"),
                new o("B","Block","A group of transactions recorded on a blockchain"),
                new o("B","Blockchain","A decentralized ledger of all transactions across a network"),
                new o("B","Bull Market","A market condition where prices are rising or expected to rise"),
                new o("C","Roofcat ","A memetic character symbolizing omniscience and watchfulness in the crypto space"),
                new o("C","Cold Wallet","An offline wallet for storing cryptocurrency"),
                new o("C","Consensus Algorithm","A mechanism used to achieve agreement on a blockchain"),
                new o("C","Cryptocurrency","A digital or virtual currency secured by cryptography"),
                new o("C","Crypto Exchange","A platform for buying, selling, and trading cryptocurrencies"),
                new o("D","dApp (Decentralized Application)","An application that runs on a decentralized network"),
                new o("D","DAO (Decentralized Autonomous Organization)","An organization governed by smart contracts and consensus mechanisms"),
                new o("D","DeFi (Decentralized Finance)","Financial services on blockchain networks without intermediaries"),
                new o("D","Diamond Hands","Holding onto an asset despite volatility and potential losses"),
                new o("D","Doxxing","Publishing private or identifying information about an individual without consent"),
                new o("E","ERC-20","A standard for tokens on the Ethereum blockchain"),
                new o("E","Exchange","A marketplace for trading cryptocurrencies"),
                new o("E","EVM (Ethereum Virtual Machine)","A runtime environment for smart contracts in Ethereum"),
                new o("F","Fiat","Traditional government-issued currency"),
                new o("F","FOMO (Fear of Missing Out)","Anxiety that one may miss a profitable investment opportunity"),
                new o("F","Fork","A change in a blockchain's protocol or code"),
                new o("F","FUD (Fear, Uncertainty, and Doubt)","Negative information spread to influence perception and price"),
                new o("G","Gas","A fee paid for transactions on the Ethereum network"),
                new o("G","Genesis Block","The first block of a blockchain"),
                new o("H","Halving","A process where the reward for mining a block is cut in half"),
                new o("H","HODL",'A misspelling of "hold," referring to holding onto cryptocurrency rather than selling'),
                new o("I","ICO (Initial Coin Offering)","A fundraising method where new cryptocurrencies are sold to early investors"),
                new o("I","Immutable","Cannot be changed or altered"),
                new o("J","JOMO (Joy of Missing Out)","Feeling content with missing out on a trend or investment"),
                new o("K","KYC (Know Your Customer)","A process to verify the identity of users"),
                new o("L","Ledger","A record of financial transactions"),
                new o("L","Liquidity","The ease with which an asset can be converted into cash"),
                new o("M","Mainnet","The main network where a blockchain operates"),
                new o("M","Market Cap/Capitalization","The total value of all coins of a cryptocurrency"),
                new o("M","Mempool","A collection of unconfirmed transactions on a blockchain"),
                new o("M","Mining","The process of verifying transactions and adding them to the blockchain"),
                new o("N","Node","A computer that participates in a blockchain network"),
                new o("N","NFT (Non-Fungible Token)","A unique digital asset verified on the blockchain"),
                new o("N","Nonce","A number used once in a cryptographic communication"),
                new o("O","Oracle","A service that provides external data to smart contracts"),
                new o("O","OTC (Over-The-Counter)","Trading conducted directly between parties without an exchange"),
                new o("P","P2P (Peer-to-Peer)","Transactions conducted directly between users"),
                new o("P","Private Key","A secret key that allows access to cryptocurrency"),
                new o("P","Proof of Stake (PoS)","A consensus mechanism where validators are chosen based on their stake in the network"),
                new o("P","Proof of Work (PoW)","A consensus mechanism where miners solve complex mathematical problems to validate transactions"),
                new o("Q","QR Code","A machine-readable code used to share cryptocurrency addresses"),
                new o("R","Rug Pull","A scam where developers abandon a project and run off with investors' funds"),
                new o("S","Satoshi","The smallest unit of Bitcoin, named after its creator"),
                new o("S","Smart Contract","A self-executing contract with the terms directly written into code"),
                new o("S","Stablecoin","A cryptocurrency pegged to a stable asset like fiat currency"),
                new o("S","Sharding","A method of partitioning a blockchain into smaller, more manageable pieces"),
                new o("S","Solana","A high-performance blockchain supporting fast and low-cost transactions"),
                new o("S","SOL","The native cryptocurrency of the Solana blockchain"),
                new o("S","Staking","The process of holding cryptocurrency in a wallet to support the operations of a blockchain network, often rewarded with more tokens"),
                new o("S","Solana Wallet","A wallet used specifically for managing Solana and SOL-based tokens"),
                new o("S","Serum","A decentralized exchange built on Solana"),
                new o("T","Token","A digital asset issued on a blockchain"),
                new o("T","Transaction Fee","A fee paid to process transactions on a blockchain"),
                new o("T","TDS (Transaction Data Structure)","The format in which transactions are organized and stored on Solana"),
                new o("U","Utility Token","A token that provides access to a product or service"),
                new o("V","Validator","A participant in a PoS network that validates transactions"),
                new o("V","Volatality","The degree of variation in the price of a cryptocurrency"),
                new o("W","Wallet","A software or hardware device to store and manage cryptocurrencies"),
                new o("W","Whale","An individual or entity that holds a large amount of cryptocurrency"),
                new o("X","XRP","The native cryptocurrency of the Ripple network"),
                new o("Y","Yield Farming","Earning rewards by lending or staking cryptocurrencies"),
                new o("Z","Zero-Knowledge Proof","A cryptographic method that allows one party to prove to another that they know a value without revealing the value itself")
            }();
            const n = document.getElementById("doubleGlossaryContainer");
            n.addEventListener("scroll", (function() {
                const e = document.getElementById("glossary")
                  , t = n.scrollHeight;
                n.scrollTop + n.offsetHeight >= t - 1 ? e.style.setProperty("--fade-opacity", "0") : e.style.setProperty("--fade-opacity", "1")
            }
            )),
            sn.style.display = "none",
            ln.style.display = "none",
            cn.style.display = "none",
            dn.style.display = "none";
            let e = !1;
            rn.addEventListener("click", (function() {
                event.stopPropagation(),
                e = !e,
                e ? (sn.style.display = "block",
                ln.style.display = "block",
                cn.style.display = "block",
                dn.style.display = "block") : (sn.style.display = "none",
                ln.style.display = "none",
                cn.style.display = "none",
                dn.style.display = "none")
            }
            )),
            document.addEventListener("click", (function(n) {
                !e || An.contains(n.target) || rn.contains(n.target) || (sn.style.display = "none",
                ln.style.display = "none",
                cn.style.display = "none",
                dn.style.display = "none",
                e = !1)
            }
            ));
            let t = !1;
            mn.addEventListener("click", (function() {
                event.stopPropagation(),
                t = !t,
                t ? (gn.style.display = "grid",
                mn.innerHTML = "X",
                mn.style.color = "var(--red)",
                mn.style.backgroundColor = "var(--textTranslucent)") : (gn.style.display = "none",
                mn.innerHTML = "Charts & More...",
                mn.style.color = "var(--lavender)",
                mn.style.backgroundColor = "var(--textTranslucent)")
            }
            )),
            document.addEventListener("click", (function(n) {
                !t || gn.contains(n.target) || mn.contains(n.target) || (gn.style.display = "none",
                mn.innerHTML = "Charts & More...",
                mn.style.color = "var(--lavender)",
                mn.style.backgroundColor = "var(--textTranslucent)",
                t = !1)
            }
            )),
            D.addEventListener("click", (()=>{
                window.open("https://knowyourmeme.com/memes/ceiling-cat", "_blank")
            }
            )),
            G.addEventListener("click", (()=>{
                window.open("https://generator.ceicatsol.com", "_self")
            }
            )),
            U.addEventListener("click", (()=>{
                window.open("https://ceicatsol.pixpa.com/app/1WpZ", "_blank")
            }
            )),
            N.addEventListener("click", (()=>{
                window.open("https://d67e413c-eca3-475c-bdba-5916a21598dc.filesusr.com/ugd/d03300_17e60ebc52d643118d123dd1324e8a1a.pdf", "_blank")
            }
            )),
            sn.addEventListener("click", (()=>{
                window.open("https://t.me/ceicatsol", "_blank")
            }
            )),
            ln.addEventListener("click", (()=>{
                window.open("https://twitter.com/Ceilingsolcat", "_blank")
            }
            )),
            cn.addEventListener("click", (()=>{
                window.open("https://www.tiktok.com/@ceilingcatsol", "_blank")
            }
            )),
            dn.addEventListener("click", (()=>{
                window.open("https://youtube.com/@SolCeilingCat", "_blank")
            }
            )),
            Cn.addEventListener("click", (()=>{
                window.open("https://coinmarketcap.com/currencies/ceiling-cat/", "_blank")
            }
            )),
            Bn.addEventListener("click", (()=>{
                window.open("https://www.coingecko.com/en/coins/ceiling-cat", "_blank")
            }
            )),
            un.addEventListener("click", (()=>{
                window.open("https://dexscreener.com/solana/3hxko6ar8w5ktdw5b1ts9zthkeeqazhivemlwhgudvms", "_blank")
            }
            )),
            hn.addEventListener("click", (()=>{
                window.open("https://www.dextools.io/app/en/solana/pair-explorer/3HxKo6ar8W5ktdw5B1ts9zTHkEeQazhiVemLWHgudVmS?t=1713342718384", "_blank")
            }
            )),
            xn.addEventListener("click", (()=>{
                window.open("https://birdeye.so/token/8PMJczfs9W8TDKiNBD85AuqxE8tWACCDeUwxpUeadL3j?chain=solana", "_blank")
            }
            )),
            bn.addEventListener("click", (()=>{
                window.open("https://solscan.io/token/8PMJczfs9W8TDKiNBD85AuqxE8tWACCDeUwxpUeadL3j", "_blank")
            }
            )),
            fn.addEventListener("click", (()=>{
                K.scrollIntoView({
                    behavior: "smooth"
                })
            }
            ));
            const i = wn.innerHTML;
            yn.addEventListener("click", (async()=>{
                try {
                    await navigator.clipboard.writeText(i),
                    console.log("Text copied successfully using Clipboard API"),
                    alert("Contract copied successfully!")
                } catch (n) {
                    const e = document.createElement("textarea");
                    e.value = i,
                    e.style.position = "fixed",
                    e.style.left = "-9999px",
                    document.body.appendChild(e),
                    e.select(),
                    document.execCommand("copy"),
                    document.body.removeChild(e),
                    console.log("Text copied successfully using legacy approach"),
                    alert("Contract copied successfully!")
                }
            }
            ))
        }
        ))
    }
    ,
    842: (n,e,t)=>{
        n.exports = t.p + "fonts/SpaceMono-Bold.ttf"
    }
    ,
    822: (n,e,t)=>{
        n.exports = t.p + "fonts/SpaceMono-BoldItalic.ttf"
    }
    ,
    305: (n,e,t)=>{
        n.exports = t.p + "fonts/SpaceMono-Regular.ttf"
    }
    ,
    241: (n,e,t)=>{
        n.exports = t.p + "fonts/impact.ttf"
    }
}, n=>{
    n(n.s = 956)
}
]);
//# sourceMappingURL=index.bundle.js.map
