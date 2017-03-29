import { Alert } from 'react-native';
import Store from 'react-native-simple-store';
import Config from './Config';

class Api {
  constructor() {
    this.user = Object.assign({}, this.defaultUser); // Création d'un clone de l'objet this.defaultUser
  } // constructor


  //GESTION LOG--------------------------------------------
  defaultUser = { // defaultUser représente un utilisateur non-connecté
    status: '',
    firstname: '',
    lastname: '',
    description: '',
    photo: '',
    city: '',
    phone: '',
    loc: { lng: 0, lat: 0 },
    lastConnection: Date.now(),
    society: '',
    cv: {
      title: '',
      experience: '',
      competences: [],
      languages: [],
      degree: '',
      qualities: [],
    }, // cv
    announces: [{
      title: '',
      description: '',
      competences: [],
      languages: [],
      salary: '',
    }],
    messages: [],
    favorites: []
  };

  setUser(user) { // Défini l'utilisateur lors de sa connection
    this.user = user || {};
    console.log('Api#SetUser ', user);
  }

  getUser() {
    return this.user;
  }

  isAuthenticated() { // vérifie si l'utilisateur est connecté
    if (this.user._id) { // l'utilisateur est connecté
      return true;
    }
    return false;
  }

  authenticate(user) { // authentifie l'utilisateur
    //console.log('authenticate ', user);
    Store.save('user', user) // sauvegarde les données de connexion dans un cookie "user"
    .then(this.setUser(user)); // Définition de l'utilisateur
    // Actions.rooms({duration: 0}); => EN CALLBACK
  }

  logIn(user = {}, callback) {
    //console.log('Api#logIn');
    this.fetchFn('user/log_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }) // this.fetchFn
    .then(json => {
      //console.log('Api#logIn json', json);
      if (!json.error) {
        this.authenticate(json); // authentification l'utilisateur
        callback();
      } else {
        // console.log('Utililsateur invalide');
        Alert.alert('E-mail ou mot de passe invalide');
      }
    }); // then
  } // logIn

  logOut(callback) { //Déconnexion de l'utilisateur
    Store.delete('user') // Efface le cookie utilisateur ("user")
    .then(() => {
      this.setUser(Object.assign({}, this.defaultUser)); // réassigne un utlilsateur null
      callback();
    });
  }

  // L'authentification est obligatoire pour getProfile
  // getProfile(profile = {}, callback) { // Récupère les infos relatives à l'utilisateur
    getProfile() {
      if (this.isAuthenticated()) {
      // let url = `user/${profile.id}`;
      console.log('getProfile isAuthenticated');
      let url = `user/${this.getUser()._id}`;
      console.log('getProfile url ',url);
      const optionObj = {
        headers: {
          Authorization: `Bearer ${this.user.token}`
        }
      };
      return this.fetchFn(url, optionObj);
    }  // Erreur d'authentification
      // callback({
        // error: 'You must be authenticated'
      // });
  }

  addToFavorite(iduser, idfavorite) {
    const url = `${Config.host}user/favorites?_iduser=${iduser}&_idfavorite=${idfavorite}`;
      fetch(url, {
        method: 'POST'
      });
    //console.log(url);
  }

  getFavorites() {
    return this.fetchFn(`user/${this.user._id}/favorites`);
  }

  getNearestUsersByLocation() {
    const user = this.getUser();
    const userType = user.status === 'candidate' ? 'recruiters' : 'candidates';
    const url = `user/${userType}?lng=${user.loc[0]}&lat=${user.loc[1]}`;
    // console.log('Api#getNearestUsersByLocation url', url);
    return this.fetchFn(url);
  }

//FETCH--------------------------------------------
fetchFn(req, optionObj = {}) {
  console.log('FETCH ', `${Config.host}${req}`);
  return (
    fetch(`${Config.host}${req}`, optionObj)
    .then((res) => res.json())
  );
} // fetch
} // class Api

export default new Api();
