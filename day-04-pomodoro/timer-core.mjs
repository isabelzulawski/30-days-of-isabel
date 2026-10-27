export const DEFAULTS={focus:25,short:5,long:15,auto:false};
export const duration=(mode,settings)=>settings[mode]*60000;
export const remaining=(state,now)=>state.running?Math.max(0,state.endAt-now):state.remaining;
export function complete(state,settings,now){const counted=state.mode==='focus';const completed=state.completed+(counted?1:0);const mode=counted?(completed%4===0?'long':'short'):'focus';const left=duration(mode,settings);return {...state,mode,completed,remaining:left,running:settings.auto,endAt:settings.auto?now+left:null};}
export function validSettings(s){return Number.isInteger(s.focus)&&s.focus>=1&&s.focus<=180&&Number.isInteger(s.short)&&s.short>=1&&s.short<=60&&Number.isInteger(s.long)&&s.long>=1&&s.long<=120&&typeof s.auto==='boolean'}
