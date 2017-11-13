import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';

import { System } from './system';

@Injectable()
export class SystemService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private systemsUrl = 'api/system';

  constructor(private http: Http) { }

  getEmptySystem() {
	let emptySystem = {
	  label: {
        LAB_GEN_INFO:"",
        TAB_SERI_NUM:"",
        TAB_FIRM_VER:"",
        LAB_MAC_INFO:"",
        TAB_ETH_CARD:"",
        TAB_MAC_ADDR:"",
        LAB_SERI_NUM:"",
        LAB_USER_ID:"",
        LAB_USER_DEFI_CODE:"",
        SAVE:"",
        MSG_1:"",
        MSG_2:"",
        MSG_3:"",
        MSG_4:"",
        MSG_5:"",
        MSG_6:"",
        MSG_7:"",
        SERI_NUM:"",
        CANCEL:"",
        NONE:""
	  },
	  Serial: '',
	  FirmVer: '',
	  perm: false,
	  root: false,
	  serial_edit_enable: false,
	  table: false
	}
    return emptySystem;
  }

  getSystem(): Promise<System> {
    return this.http.get(this.systemsUrl)
      .toPromise()
      .then(response => { 
        return response.json().data as System
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

