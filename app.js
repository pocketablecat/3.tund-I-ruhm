(function(){
   "use strict";

   var Moosipurk = function(){

     // SEE ON SINGLETON PATTERN
     if(Moosipurk.instance){
       return Moosipurk.instance;
     }
     //this viitab Moosipurk fn
     Moosipurk.instance = this;

     this.routes = Moosipurk.routes;
     // this.routes['home-view'].render()

     console.log('moosipurgi sees');

     // KÕIK muuutujad, mida muudetakse ja on rakendusega seotud defineeritakse siin
     this.click_count = 0;
     this.currentRoute = null;
     console.log(this);

     // Kui tahan Moosipurgile referenci siis kasutan THIS = MOOSIPURGI RAKENDUS ISE
     this.init();
   };

   window.Moosipurk = Moosipurk; // Paneme muuutja külge

   Moosipurk.routes = {
     'home-view': {
       'render': function(){
         // käivitame siis kui lehte laeme
         console.log('>>>>avaleht');
       }
     },
     'list-view': {
       'render': function(){
         // käivitame siis kui lehte laeme
         console.log('>>>>loend');
       }
     },
     'manage-view': {
       'render': function(){
         // käivitame siis kui lehte laeme
       }
     }
   };

   // Kõik funktsioonid lähevad Moosipurgi külge
   Moosipurk.prototype = {

     init: function(){
       console.log('Rakendus läks tööle');

       //kuulan aadressirea vahetust
       window.addEventListener('hashchange', this.routeChange.bind(this));

       

       // esimene loogika oleks see, et kuulame hiireklikki nupul
       this.bindMouseEvents();

     },

     bindMouseEvents: function(){
       document.querySelector('.add-new-jar').addEventListener('click', this.addNewClick.bind(this));

     },

     addNewClick: function(event){
       console.log(event);

       this.click_count++;
       console.log(this.click_count);

     },

     routeChange: function(event){

       //kirjutan muuutujasse lehe nime, võtan maha #
       this.currentRoute = location.hash.slice(1);
       console.log(this.currentRoute);

       //muudan menüü lingi aktiivseks
       this.updateMenu();


     },

     updateMenu: function() {
       //http://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript
       //1) võtan maha aktiivse menüülingi kui on
       document.querySelector('.active-menu').className = document.querySelector('.active-menu').className.replace('active-menu', '');

       //2) lisan uuele juurde
       //console.log(location.hash);
       document.querySelector('.'+this.currentRoute).className += ' active-menu';

     }

   };

   // kui leht laetud käivitan Moosipurgi rakenduse
   window.onload = function(){
     var app = new Moosipurk();
   };

})();
