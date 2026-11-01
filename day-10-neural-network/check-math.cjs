const fs=require('fs'),assert=require('node:assert/strict');
const script=fs.readFileSync(__dirname+'/index.html','utf8').match(/<script>([\s\S]*?)<\/script>/)[1];
const prefix=script.slice(script.indexOf("'use strict';"),script.indexOf('const stages='));
const m=new Function(prefix+';return {W,b,v,bo,forward,gradW,gradV,dh,delta,before,after};')();
const eps=1e-5,near=(a,b)=>assert(Math.abs(a-b)<1e-7,`${a} != ${b}`);
for(let j=0;j<3;j++){for(let i=0;i<2;i++){const w=m.W.map(r=>r.slice());w[j][i]+=eps;const plus=m.forward(w,m.b,m.v,m.bo).loss;w[j][i]-=2*eps;near((plus-m.forward(w,m.b,m.v,m.bo).loss)/(2*eps),m.gradW[j][i]);}const bs=m.b.slice();bs[j]+=eps;const plus=m.forward(m.W,bs,m.v,m.bo).loss;bs[j]-=2*eps;near((plus-m.forward(m.W,bs,m.v,m.bo).loss)/(2*eps),m.dh[j]);const vs=m.v.slice();vs[j]+=eps;const vp=m.forward(m.W,m.b,vs,m.bo).loss;vs[j]-=2*eps;near((vp-m.forward(m.W,m.b,vs,m.bo).loss)/(2*eps),m.gradV[j]);}
near((m.forward(m.W,m.b,m.v,m.bo+eps).loss-m.forward(m.W,m.b,m.v,m.bo-eps).loss)/(2*eps),m.delta);assert(m.after.loss<m.before.loss);console.log('All parameter gradients match finite differences');console.log('One update lowers loss from',m.before.loss.toFixed(4),'to',m.after.loss.toFixed(4));
