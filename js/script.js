styles = `
/*
 * "Myself" v1.0.5
 * Robot rights protected under BOT License
 * Authored by pen#PwLXXP
 */

body {
  background-color: #1a1c24; color: #fff;
  font-size: 13px; line-height: 1.4;
  -webkit-font-smoothing: subpixel-antialiased;
}

/* ...
 *
 * ...hello?
 *
 * Oh hai guys! It's me, pen#PwLXXP.
 *
 * I'm just sitting here coding away.
 *
 * Sure, you can watch.
 *
 *
 * This CSS is being injected into a DOM <style> element
 * and written in this <pre> element simultaneously.
 *
 * Confused? Watch!
 *
 */

pre {
  position: fixed; width: 48%;
  top: 30px; bottom: 30px; left: 26%;
  transition: left 500ms;
  overflow: auto;
  background-color: #313744; color: #a6c3d4;
  border: 1px solid rgba(0,0,0,0.2);
  padding: 24px 12px;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);
}


/*
 * Syntax highlighting
 * Colors based on Base16 Ocean Dark
 */

pre em:not(.comment) { font-style: normal; }

.comment       { color: #707e84; }
.selector      { color: #c66c75; }
.selector .key { color: #c66c75; }
.key           { color: #c7ccd4; }
.value         { color: #d5927b; }


/*
 * Let's build my little pen heart.
 */


/* First, we'll move this s*** over */

pre { left: 50%; }


/* Now we can build my heart */

#heart, #echo {
  position: fixed;
  width: 300px; height: 300px;
  top: calc(50% - 150px); left: calc(25% - 150px);
  text-align: center;
  -webkit-transform: scale(0.95);
          transform: scale(0.95);
}

#heart { z-index: 8; }
#echo  { z-index: 7; }

#heart::before, #heart::after, #echo::before, #echo::after {
    content: '';
    position: absolute;
    top: 40px;
    width: 150px; height: 240px;
    background: #c66c75;
    border-radius: 150px 150px 0 0;
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
            transform-origin: 0 100%;
}

#heart::before, #echo::before {
  left: 150px;
}

#heart::after, #echo::after {
  left: 0;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  -webkit-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
}


/* It needs some depth  */

#heart::after {
  box-shadow:
    inset -6px -6px 0px 6px rgba(255,255,255,0.1);
}

#heart::before {
  box-shadow:
    inset 6px 6px 0px 6px rgba(255,255,255,0.1);
}


/* Makin it mine. */

#heart i::before {
  content: 'pen#PwLXXP';
  position: absolute;
  z-index: 9;
  width: 100%;
  top: 35%; left: 0;
  font-style: normal;
  color: rgba(255,255,255,0.8);
  font-weight: 100;
  font-size: 30px;
  text-shadow: -1px -1px 0px rgba(0,0,0,0.2);
}


/*
 * Hearts gotta beat.
 */

@-webkit-keyframes heartbeat {
  0%, 100% {
    -webkit-transform: scale(0.95);
            transform: scale(0.95);
  }
  50% {
    -webkit-transform: scale(1.00);
            transform: scale(1.00);
  }
}

@keyframes heartbeat {
  0%, 100% { transform: scale(0.95); }
  50%      { transform: scale(1.00); }
}

@-webkit-keyframes echo {
  0%   {
    opacity: 0.1;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.4);
            transform: scale(1.4);
  }
}

@keyframes echo {
  0%   {
    opacity: 0.1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.4);
  }
}


/*
 * Beautiful! Now for the beating...
 */

#heart, #echo {
  -webkit-animation-duration: 2000ms;
          animation-duration: 2000ms;
  -webkit-animation-timing-function:
    cubic-bezier(0, 0, 0, 1.74);
          animation-timing-function:
            cubic-bezier(0, 0, 0, 1.74);
  -webkit-animation-delay: 500ms;
          animation-delay: 500ms;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-play-state: paused;
          animation-play-state: paused;
}

#heart {
  -webkit-animation-name: heartbeat;
          animation-name: heartbeat;
}
#echo {
  -webkit-animation-name: echo;
          animation-name: echo;
}


/*
 * Ready...
 */

#heart, #echo {

/*
 * ...set...
 */

  -webkit-animation-play-state: running;
          animation-play-state: running;

/*
 * ...beat!
 */

}

/*
 *
 * Wahoo!
 *
 * We did it!
 *
 * I mean *I* did it, but you know, whatever...
 * jake albaugh definitely did not have anything
 * to do with this.
 *
 * This pen loves CodePen!
 *
 * See you later!
 *
 */
`

//styles = `
/*
 * Hello! This is a self-generating website
 * Watch me design myself!
 */
//`

$(document).ready(function() {
	var index = 0;
	var time = window.innerWidth <= 578 ? 4 : 16;
    $("body").append(`
    		<pre id="style-text"></pre>
        	<style id="style-tag"></style>
			<span id="echo"></span>
			<span id="heart"><i></i></span>
        `);
    writeChar = function writeChar() {
        $("pre#style-text").text(styles.substr(0, index++));
        $("#style-tag").text(styles.substr(0, index++));
		$("#style-text").scrollTop($("#style-text")[0].scrollHeight);
    	if (index < styles.length + 1) {
            setTimeout("writeChar()", time);
        } else {
        	index = 0;
        }
    }
    writeChar();
});
