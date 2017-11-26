import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
	let system = {
	  label: {
        LAB_GEN_INFO:"일반정보",
        TAB_SERI_NUM:"제품 고유 번호",
        TAB_FIRM_VER:"펌웨어 버전",
        LAB_MAC_INFO:"MAC 정보",
        TAB_ETH_CARD:"이더넷 카드",
        TAB_MAC_ADDR:"하드웨어 주소",
        LAB_SERI_NUM:"제품 고유 번호",
        LAB_USER_ID:"사용자 고유 번호",
        LAB_USER_DEFI_CODE:"사용자 정의 코드",
        SAVE:"적용",
        MSG_1:"디스크 의 마운트가 되지 않았습니다. 보안장비 업체 담당자에게 문의하십시오. ",
        MSG_2:"새로운 디스크 와 교체된 디스크 의 설정을 확인하시고 사용하십시오.",
        MSG_3:"새로운 디스크의 설정을 확인하시고 사용하십시오. ",
        MSG_4:"동작환경 검사 결과 이상을 탐지하였습니다. ",
        MSG_5:"동작환경 검사 결과 이상을 탐지하여 다음 서비스를 비활성화 하였습니다: 패킷 포워딩",
        MSG_6:"동작환경 검사 결과 이상을 탐지하여 다음 서비스를 비활성화 하였습니다: IPSec VPN",
        MSG_7:"동작환경 검사 결과 이상을 탐지하여 다음 서비스를 비활성화 하였습니다: 패킷 포워딩, IPSec VPN",
        SERI_NUM:"고유 번호",
        CANCEL:"취소",
        NONE:"항목이 없습니다"
	  },
	  mac_infos: [
        {eth:"eth0" , mac:"00:00:00:00:00:00"},
        {eth:"eth1" , mac:"11:11:11:11:11:11"},
        {eth:"eth2" , mac:"22:22:22:22:22:22"},
        {eth:"eth3" , mac:"33:33:33:33:33:33"},
        {eth:"eth4" , mac:"44:44:44:44:44:44"},
        {eth:"eth5" , mac:"55:55:55:55:55:55"},
        {eth:"eth6" , mac:"66:66:66:66:66:66"}
	  ],
	  Serial: 'XN2000-0001',
	  FirmVer: 'XIOS-2.0(r99999)',
	  perm: true,
	  root: true,
	  serial_edit_enable: true,
	  table: true
	}
    return {system};
  }
}
