export class Label {
  LAB_GEN_INFO: string;
  TAB_SERI_NUM: string;
  TAB_FIRM_VER: string;
  LAB_MAC_INFO: string;
  TAB_ETH_CARD: string;
  TAB_MAC_ADDR: string;
  LAB_SERI_NUM: string;
  LAB_USER_ID: string;
  LAB_USER_DEFI_CODE: string;
  SAVE: string;
  MSG_1: string;
  MSG_2: string;
  MSG_3: string;
  MSG_4: string;
  MSG_5: string;
  MSG_6: string;
  MSG_7: string;
  SERI_NUM: string;
  CANCEL: string;
  NONE: string;
}

export class Mac {
  eth: string;
  mac: string;
}

export class System {
  label: Label;   
  mac_infos: Mac[];
  Serial: string;
  FirmVer: string;
  serial_edit_enable: boolean;

  perm: boolean;
  root: boolean;
  table: boolean;
}
