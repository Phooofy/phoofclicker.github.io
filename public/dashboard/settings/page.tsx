<>
  {/* external */}
  {/*<link href="https://fonts.googleapis.com/css?family=Kavoon&subset=latin,latin-ext" rel="stylesheet" type="text/css">*/}
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "@font-face {font-family:Merriweather;font-style:normal;font-weight:900;src:url(/cf-fonts/s/merriweather/5.0.11/cyrillic/900/normal.woff2);unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;font-display:swap;}@font-face {font-family:Merriweather;font-style:normal;font-weight:900;src:url(/cf-fonts/s/merriweather/5.0.11/cyrillic-ext/900/normal.woff2);unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;font-display:swap;}@font-face {font-family:Merriweather;font-style:normal;font-weight:900;src:url(/cf-fonts/s/merriweather/5.0.11/vietnamese/900/normal.woff2);unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;font-display:swap;}@font-face {font-family:Merriweather;font-style:normal;font-weight:900;src:url(/cf-fonts/s/merriweather/5.0.11/latin-ext/900/normal.woff2);unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;font-display:swap;}@font-face {font-family:Merriweather;font-style:normal;font-weight:900;src:url(/cf-fonts/s/merriweather/5.0.11/latin/900/normal.woff2);unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;font-display:swap;}"
    }}
  />
  {/* Facebook Pixel Code */}
  <noscript>
    &lt;img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=357399801355203&amp;ev=PageView&amp;noscript=1"&gt;
  </noscript>
  {/* end code */}
  {/* /external */}
  <title>Cookie Clicker</title>
  {/*
Code and graphics copyright Orteil, 2013-2026
Feel free to alter this code to your liking, but please do not re-host it, do not profit from it and do not present it as your own.
*/}
  <meta name="viewport" content="width=900, initial-scale=1" />
  <link rel="shortcut icon" href="img/favicon.ico" />
  <link href="style.css?v=10c" rel="stylesheet" type="text/css" />
  {/*[if IE]>
<style type="text/css">
	#ifIE9{display:block;}
</style>
<![endif]*/}
  {/*[if lt IE9]><![endif]*/}
  <div id="wrapper">
    <div id="topBar">
      {/*<div><b style="font-weight:bold;">Cookie Clicker</b>&trade; &copy; <a href="//orteil.dashnet.org" target="_blank" id="topbarOrteil">Orteil</a>, 2025</div>*/}
      <div
        style={{ position: "relative", display: "none", fontWeight: "bold" }}
        id="heralds"
      >
        <div
          style={{
            position: "absolute",
            top: "-4px",
            width: 31,
            height: 39,
            background: "url()",
            left: "50%",
            marginLeft: "-15px",
            pointerEvents: "none"
          }}
        />
        <div
          id="heraldsAmount"
          style={{
            position: "relative",
            zIndex: 10,
            textShadow: "0px 1px 0px #000,0px 0px 6px #ff00e4",
            color: "#fff"
          }}
        >
          -
        </div>
      </div>
      {/*<div><a href="//orteil.dashnet.org/randomgen/" target="_blank" id="topbarRandomgen">RandomGen</a></div>
		<div><a href="//orteil.dashnet.org/igm/" target="_blank" id="topbarIGM">Idle Game Maker</a></div>*/}
      <div style={{ float: "right", position: "relative" }}>
        <div
          id="tinyglobe"
          style={{
            position: "absolute",
            top: 4,
            width: 22,
            height: 22,
            background: "url(img/tinyglobeSheet.gif)",
            right: 4,
            pointerEvents: "none"
          }}
        />
        <a
          id="changeLanguage"
          style={{ fontVariant: "small-caps", paddingRight: 20 }}
          onmouseover="INTERVAL_TINYGLOBE=setInterval(function(){var tinyglobe=document.getElementById('tinyglobe');tinyglobe.style.backgroundPosition=(parseInt(tinyglobe.style.backgroundPosition)-22)+'px';},30);"
          onmouseout="clearInterval(INTERVAL_TINYGLOBE);"
        >
          Change language
        </a>
      </div>
      <div
        id="topbarOtherVersions"
        style={{ float: "right", zIndex: 10000000 }}
        className="hoverer"
      >
        Other versions
        <div className="hoverable"></div>
      </div>
      <div id="topBarEnd" style={{ float: "right", padding: 0 }} />
    </div>
    <div id="game">
      <div id="versionNumber" className="title" />
      <div id="offGameMessageWrap">
        <div id="offGameMessage">
          <div id="loader">
            <div className="spinnyBig" />
            <div className="spinnySmall" />
            <div id="loading" className="title">
              Loading...
            </div>
            <div id="failedToLoad" className="title">
              This is taking longer than expected.
              <br />
              <div style={{ fontSize: "65%", lineHeight: "120%" }}>
                {/* error */}Slow connection? If not, please make sure your
                javascript is enabled, then refresh.
                <br />
                If problems persist, this might be on our side - wait a few
                minutes, then hit ctrl+f5!{/* /error */}
              </div>
            </div>
            <div
              id="ifIE9"
              className="title"
              style={{ fontSize: "100%", lineHeight: "120%" }}
            >
              Your browser may not be recent enough to run Cookie Clicker.
              <br />
              You might want to update, or switch to a more modern browser such
              as Chrome or Firefox.
            </div>
          </div>
        </div>
      </div>
      <canvas id="backgroundCanvas" />
      <div id="goldenCookie" className="goldenCookie" />
      <div id="seasonPopup" className="seasonPopup" />
      <div id="shimmers" />
      <div id="alert" />
      <div id="particles" />
      <div id="sparkles" className="sparkles" />
      <div id="notes" />
      <div id="darken" />
      <div id="toggleBox" className="framed prompt" />
      <div id="promptAnchor">
        <div id="prompt" className="framed">
          <div id="promptContent" />
          <div
            id="promptClose"
            className="close"
            style={{ display: "none" }}
            onclick="PlaySound('snd/tickOff.mp3');Game.ClosePrompt();"
          >
            x
          </div>
        </div>
      </div>
      <div id="ascend">
        <div id="ascendBG" />
        <div id="ascendZoomable">
          <div id="ascendContent">
            <div id="ascendUpgrades" style={{ position: "absolute" }} />
          </div>
        </div>
        <div id="ascendOverlay" />
      </div>
      <div id="debug">
        <div id="devConsole" className="framed" />
        <div id="debugLog" />
      </div>
      <div id="sectionLeft" className="inset">
        <canvas id="backgroundLeftCanvas" style={{ zIndex: 5 }} />
        <div className="blackFiller" />
        <div className="blackGradient" />
        <div id="sectionLeftInfo" />
        <div id="cookies" className="title" />
        <div id="bakeryNameAnchor">
          <div id="bakeryName" className="title" />
        </div>
        <div id="specialPopup" className="framed prompt offScreen" />
        <div id="buffs" className="crateBox" />
        <div id="cookieAnchor">
          <button id="bigCookie" />
          <div id="cookieNumbers" />
        </div>
        <div id="sectionLeftExtra" />
      </div>
      <div className="separatorLeft" id="leftBeam" />
      <div className="separatorRight" id="rightBeam" />
      <div id="sectionMiddle" className="inset">
        <div id="comments" className="inset title">
          <div id="prefsButton" className="panelButton">
            <div className="subButton">Options</div>
          </div>
          <div id="statsButton" className="panelButton">
            <div>Stats</div>
          </div>
          <div id="logButton" className="panelButton">
            <div>Info</div>
            <div id="checkForUpdate">New update!</div>
          </div>
          <div id="legacyButton" className="panelButton">
            <div className="subButton">Legacy</div>
            <div
              id="ascendMeterContainer"
              className="smallFramed meterContainer"
            >
              <div id="ascendMeter" className="meter filling" />
            </div>
            <div className="roundedPanel" id="ascendNumber" />
            <div id="ascendTooltip" className="framed" />
          </div>
          <div id="commentsText">
            <div id="commentsText1" className="commentsText" />
            <div id="commentsText2" className="commentsText" />
          </div>
          <div className="separatorBottom" />
        </div>
        <div id="centerArea">
          <div id="buildingsTitle" className="inset title zoneTitle">
            Buildings
          </div>
          <div id="buildingsMaster" />
          <div id="rows" />
          <div id="menu" />
        </div>
      </div>
      <div id="sectionRight" className="inset">
        {/* ad */}
        <div
          className="ifNoAds"
          style={{
            width: 300,
            textAlign: "center",
            padding: "8px 0px",
            background: "rgba(0,0,0,0.95)",
            fontSize: 10,
            opacity: "0.5",
            textShadow: "0px 0px 2px #000,0px 1px 0px #000"
          }}
        >
          {/*Cookie Clicker is mainly supported by ads.<br>Consider unblocking our site!*/}
        </div>
        <div
          id="smallSupport"
          style={{
            width: 300,
            textAlign: "center",
            paddingBottom: 40,
            background: "rgba(0,0,0,0.5)",
            position: "relative",
            zIndex: 100
          }}
        >
          {/* Cookie Clicker Header Responsive */}
          <ins
            className="adsbygoogle"
            style={{
              display: "block",
              margin: "auto",
              width: 300,
              maxHeight: 300,
              overflow: "hidden"
            }}
            data-ad-client="ca-pub-5622691057838054"
            data-ad-slot={4603093678}
            data-ad-format="rectangle"
            data-full-width-responsive="true"
          />
          <div className="supportComment" />
        </div>
        {/* /ad */}
        <div id="store">
          <div id="storeTitle" className="inset title zoneTitle">
            Store
          </div>
          <div id="toggleUpgrades" className="storeSection upgradeBox" />
          <div id="techUpgrades" className="storeSection upgradeBox" />
          <div id="vaultUpgrades" className="storeSection upgradeBox" />
          <div id="upgrades" className="storeSection upgradeBox" />
          <div id="products" className="storeSection" />
        </div>
        {/* ad */}
        <div
          id="detectAds"
          className="adBanner"
          style={{ background: "transparent", width: 1, height: 1 }}
        />
        <div id="support" style={{ marginTop: 130 }}>
          <div className="supportComment" />
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", zIndex: 100, minHeight: 250 }}>
              {/* Cookie Clicker Responsive */}
              <ins
                className=""
                style={{ display: "block", margin: "auto" }}
                data-ad-client="ca-pub-5622691057838054"
                data-ad-slot={5257699793}
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
              <div style={{ height: 32 }} />
              <div id="adPlaysaurus" />
              <div style={{ height: 32 }} />
            </div>
          </div>
        </div>
        {/* /ad */}
      </div>
      <div id="tooltipAnchor">
        <div
          id="tooltip"
          className="framed"
          onmouseout="Game.tooltip.hide();"
        />
      </div>
      <div id="preloadImages" style={{ display: "none" }} />
    </div>
  </div>
</>
