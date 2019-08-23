import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  /**
   * browserLogin
   */
  public browserLogin(loginMethodOption: string): Promise<any> {
    if (loginMethodOption === 'google') {
      return this.doGoogleLogin();
    }
    return this.doGitHubLogin();
  }

  public loginWithEmailAndPwd(userLoginParams): Promise<any> {
    const email = userLoginParams.email;
    const pwd = userLoginParams.pwd;
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, pwd)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }
  public registerWithEmailAndPwd(userLoginParams): Promise<any> {
    const email = userLoginParams.email;
    const pwd = userLoginParams.pwd;
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, pwd)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }

public logout(user) {
  this.afAuth.auth.signOut();
}
  private doGitHubLogin() {
    const provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('repo');
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        return res;
      })
      .catch(err => {
        return err;
      });
  }

  private doGoogleLogin(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          resolve(res);
        },
        err => {
          reject(err);
        }
      );
    });
  }

}
