const app = Vue.createApp({
  data() {
    return {
      options: [
        {  
          date:'1857',
          title: 'Map of the city of Cambridge, Mass.',
          image:'https://tile.loc.gov/image-services/iiif/service:gmd:gmd376:g3764:g3764c:ct006248/full/pct:12.5/0/default.jpg',
          resource:'https://hdl.loc.gov/loc.gmd/g3764c.ct006248',
          manifest:'https://www.loc.gov/item/75697122/manifest.json',
          class:'unk'
        },
        {
          date:'1734',
          title: 'Xin\'an Xian he tu. / 新安縣河圖. / Map of the river systems in Xin\'an County',
          image:'https://tile.loc.gov/image-services/iiif/service:gmd:gmd7:g7823:g7823x:ct003373/full/pct:12.5/0/default.jpg',
          resource:'https://hdl.loc.gov/loc.gmd/g7823x.ct003373',
          manifest:'https://www.loc.gov/item/gm71005100/manifest.json',
          class:'unk'
        }, 
        {
          date:'1926',
          title: 'Washington and vicinity, Maryland, District of Columbia, Virginia',
          image:'https://tile.loc.gov/image-services/iiif/service:gmd:gmd385:g3851:g3851p:ct004827/full/pct:12.5/0/default.jpg',
          resource:'https://hdl.loc.gov/loc.gmd/g3851p.ct004827',
          manifest:'https://www.loc.gov/item/87691496/manifest.json',
          class:'unk'
        },
        {
          date:'1682',
          title: '武州豊嶋郡江戶庄圖. / Bushū Toshima Gōri Edo no shōzu / Bushū Toshima-gun Edo-shō zu',
          image:'https://tile.loc.gov/image-services/iiif/service:gmd:gmd7:g7964:g7964t:ct002119/full/pct:12.5/0/default.jpg',
          resource:'https://hdl.loc.gov/loc.gmd/g7964t.ct002119',
          manifest:'https://www.loc.gov/item/80691955/manifest.json',
          class:'unk'
        }, 
        {
          date:'1914',
          title: 'Overzichtskaart van het eiland Borneo : schaal 1:2 000 000.',
          image:'https://tile.loc.gov/image-services/iiif/service:gmd:gmd8:g8100:g8100:ct001925/full/pct:12.5/0/default.jpg',
          resource:'https://hdl.loc.gov/loc.gmd/g8100.ct001925',
          manifest:'https://www.loc.gov/item/2006629780/manifest.json',
          class:'unk'
        },   
        {
          date:'1914',
          title: 'Karta raionov kontrol\'nykh palat v Aziatskoi Rossii.',
          image:'https://tile.loc.gov/image-services/iiif/service:gdc:gdclccn:20:18:75:93:25:2018759325:003202/full/pct:25/0/default.jpg',
          resource:'https://hdl.loc.gov/loc.ndlpcoop/mtfxmp.natl0001_03202',
          manifest:'https://www.loc.gov/item/2018759325/manifest.json',
          class:'unk'
        },   
        {
          date:'1927',
          title: 'Ana Vatan : [Turkey].',
          image:'https://tile.loc.gov/image-services/iiif/service:gmd:gmd7:g7431:g7431f:ct003172/full/pct:12.5/0/default.jpg',
          resource:'https://hdl.loc.gov/loc.gmd/g7431f.ct003172',
          manifest:'https://www.loc.gov/item/2010593205/manifest.json',
          class:'unk'
        },   
        {
          date:'1782',
          title: 'Plano de la ciudad de Puerto Real, en la isla de la Jamaica.',
          image:'https://tile.loc.gov/image-services/iiif/service:gmd:gmd4:g4964:g4964p:ar195500/full/pct:25/0/default.jpg',
          resource:'https://hdl.loc.gov/loc.gmd/g4964p.ar195500',
          manifest:'https://www.loc.gov/item/73691845/manifest.json',
          class:'unk'
        },
        {
          date:'1720',
          title: 'La Californie ou Nouvelle Caroline : teatro de los trabajos, Apostolicos de la Compa. e Jesus en la America Septe.',
          image:'https://tile.loc.gov/image-services/iiif/service:gmd:gmd4:g4410:g4410:ct001000/full/pct:12.5/0/default.jpg',
          resource:'https://hdl.loc.gov/loc.gmd/g4410.ct001000',
          manifest:'https://www.loc.gov/item/96686640/manifest.json',
          class:'unk'
        },
        {
          date:'1850',
          title:'Der nördliche gestirnte Himmel',
          image:'https://tile.loc.gov/image-services/iiif/service:gmd:gmd3:g3190:g3190:ct003918r/full/pct:12.5/0/default.jpg',
          resource:'https://hdl.loc.gov/loc.gmd/g3190.ct003918r',
          manifest:'https://www.loc.gov/item/2014588164/manifest.json',
          class:'unk'
        },
        {
          date:'1822',
          title:'Plan of the city of Baltimore',
          image:'https://tile.loc.gov/image-services/iiif/service:gmd:gmd384:g3844:g3844b:wd000015/full/pct:12.5/0/default.jpg',
          resource:'https://hdl.loc.gov/loc.gmd/g3844b.wd000015',
          manifest:'https://www.loc.gov/item/2002624027/manifest.json',
          class:'unk'
        }
      ],
      answers: ['z','y','a','b','c','d','e','f','g','h'],
      rando: [],
      correctNum: '',
      correctImg: '',
      correctHdl: '',
      correctTitle: '',
      correctDate: '',
      correctDateStatement: '',
      correctManifest:'',
      verdict:'',
      response:'hide',
      progressBtn: 'Skip',
      tify: {
        class:'hide'
      },
      countdown: {
        class:'hide'
      },
      zoomTime: 10,
      timeLeft: 10.5,
      tifyLoaded: 'False',
      observer: '',
      hourglass: {
        backgroundSize: '100%',
        backgroundPosition: 'center bottom',
        height:'6rem',
        width:'6rem'
      }
    }
  },
  methods: {
    reloadPage(){
      window.location.reload()
    },
    imgLoaded() {
      let spinner = document.getElementById('spinner-container');
      spinner.remove();
    },
    imgLoadError(event) {
      event.target.class = "hide"
    },
    dedup(_array) {
      let uniqueChars = [...new Set(_array)];
      if (_array.length > uniqueChars.length) {
        _array = Array.from(uniqueChars)
      };
      return _array;
    },
    randomNumbers() {
      const min = 0;
      const max = this.options.length;
      const a = Math.random() * (max - min) + min;
      const b = Math.random() * (max - min) + min;
      const c = Math.random() * (max - min) + min;
      this.rando = [Math.floor(a),Math.floor(b),Math.floor(c)];
      //deduplicate if necessary
      this.rando = this.dedup(this.rando)
      if (this.rando.length < 3) {
        this.randomNumbers()
      }
    }, 
    randomArray() {
      //resets
      this.resetButtons();
      this.scrollUp();
      this.response="hide";
      this.progressBtn="Skip";

      this.randomNumbers();
      this.answers = [
        this.options[this.rando[0]],
        this.options[this.rando[1]],
        this.options[this.rando[2]]
      ];
      
      this.correctNum = Math.floor(Math.random() * (this.answers.length));
      this.correctImg = this.answers[this.correctNum].image;
      this.correctHdl = this.answers[this.correctNum].resource;
      this.correctTitle = this.answers[this.correctNum].title;
      this.correctDate = this.answers[this.correctNum].date;
      this.correctManifest = this.answers[this.correctNum].manifest;

      //Generate a version of the date for use in the "answer reveal" statement, 
      // for dates that end in '?' (e.g., '188?'). 
      if (this.correctDate.match(/\d{3}\?/) != null) {
        let decade = this.correctDate
        decade = decade.replace('?','')
        this.correctDateStatement = decade + '0s (the exact publication date is not known)'
      }
      // for dates that end in '0s' (e.g., '1880s').
      else if (this.correctDate.match(/\d{3}0s/) != null) {
        this.correctDateStatement = this.correctDate + ' (the exact publication date is not known)'
      }
      else {
        this.correctDateStatement = this.correctDate
      };

      // double check that there are duplicated dates within items selected. 
      // to avoid this workaround, selection method should be reworked.
      let dates = [];
      for (i = 0; i < this.answers.length; i++) {
        dates.push(this.answers[i].date)
      };
      let dedupedDates = this.dedup(dates);
      if (dedupedDates.length < 3) {
        //console.log('duplicate detected')
        if (this.correctNum == 0) {
          this.answers[1].date = Math.floor(Math.random() * 470)+1540
          this.answers[2].date = Math.floor(Math.random() * 470)+1540
        }
        else if (this.correctNum == 1) {
          this.answers[0].date = Math.floor(Math.random() * 470)+1540
          this.answers[2].date = Math.floor(Math.random() * 470)+1540
        }
        else if (this.correctNum == 2) {
          this.answers[0].date = Math.floor(Math.random() * 470)+1540
          this.answers[1].date = Math.floor(Math.random() * 470)+1540
        }
    
      };
    },
    reveal(b) {
      for (i = 0; i < this.answers.length; i++) {
        this.answers[i].class = 'incorrect';
      };
      this.answers[this.correctNum].class = 'correct';
      const selected = b.currentTarget.getAttribute('option');
      this.answers[selected].class = this.answers[selected].class + ' selected';
      
      if (selected == this.correctNum) {
        this.verdict = "Correct!"
      } else {
        this.verdict = "Incorrect."
      };

      this.response="show";
      this.progressBtn = "Next"
    },
    resetButtons() {
      for (i = 0; i < this.answers.length; i++) {
        this.answers[i].class = 'unk';
      };
    },
    scrollUp() {
      window.scrollTo(0, 0);
    },
    zoom(e) {
      window.Tify.init();
      this.tify.class='no-hide fadeIn';
      this.watchTify();
      //replace hint text, behind tify
      setTimeout(() => e.target.classList.add('hide'),1000);
      setTimeout(() => document.getElementById("hintB").classList.remove('hide'), 1000);
    },
    zoomTimer() {
      //countdown clock
      this.startCountdown();
      //timing - fade and hide the tify zoom area
      const beginFadeOut = this.zoomTime * 1000;
      const beginHide = beginFadeOut + 1000;
      setTimeout(() => this.tify.class = 'fadeOut', beginFadeOut);
      setTimeout(() => this.tify.class = 'hide', beginHide);
    },
    //countdown clock 
    startCountdown() {
      this.timeLeft = Math.floor (this.timeLeft);
      setInterval(this.incrementTime, 1000);
      const beginFadeOut = this.zoomTime * 1000;
      const showTimer = beginFadeOut - 10000; //to delay the appearance of the clock
      setTimeout(() => this.countdown.class='no-hide fadeIn', showTimer);
      setTimeout(() => this.countdown.class='hide', beginFadeOut);
    },
    incrementTime() {
      if(this.timeLeft > 0) {
        console.log(this.timeLeft)
        this.timeLeft = this.timeLeft - 1;
        let hourglassSand = (this.timeLeft / this.zoomTime) * 100;
        this.hourglass.backgroundSize = '100% '+hourglassSand + '%, 100%';
      } else {
        clearInterval(this.timeLeft);
      }
    },
    watchTify() {
      let tifyDiv = document.getElementById('tify'),   
      options = {
        childList: true,
        subtree: true
      };
      this.observer = new MutationObserver(this.watchMutations);
      this.observer.observe(tifyDiv, options);
    },
    watchMutations(mutations) {
        //check for the first time that the loader icon disappears 
        // after the .openseadragon-container divs are created
        for (let mutation of mutations) {
          var seadragon = document.getElementsByClassName('openseadragon-container');
          if (
            (seadragon.length > 0) &&
            (mutation.removedNodes.length > 0) &&
            (mutation.removedNodes[0].className === 'tify-app_loading')
            ) { 
              this.zoomTimer(); 
              this.observer.disconnect();  
            }
          }
        },
    showTitle(e) {
      document.getElementById('hintBtitle').classList.remove('hide');
      document.getElementById('hintBtitle').classList.add('fadeIn');
      e.target.classList.add('hide');
    },
    tifyUrlClean() {
        let url, uri = window.location.href, regex = /([?&])tify=.*?(&|$)/;
        if (uri.match(regex)) {
            url = uri.replace(regex, '$2');
            window.history.replaceState({}, '', url);
        }
    },
    
  },
  created() {
    this.randomArray();
    this.tifyUrlClean();
  }
});

app.mount('#container');

mapImage = document.getElementById('mapImage');

tifyOptions = {
  language: 'en',
  manifest: mapImage.getAttribute('manifest'),
  stylesheet: null,
  init: false
};
