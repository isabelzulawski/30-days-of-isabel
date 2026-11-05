'use strict';
class PixelDrawing{
 constructor(n=16,pixels){this.n=n;this.pixels=pixels?pixels.slice():Array(n*n).fill(null);this.history=[];this.future=[];}
 snapshot(){return {n:this.n,pixels:this.pixels.slice()};}
 remember(before){if(before.n===this.n&&before.pixels.every((v,i)=>v===this.pixels[i]))return false;this.history.push(before);if(this.history.length>60)this.history.shift();this.future=[];return true;}
 load(s){this.n=s.n;this.pixels=s.pixels.slice();}
 undo(){if(!this.history.length)return false;this.future.push(this.snapshot());this.load(this.history.pop());return true;}
 redo(){if(!this.future.length)return false;this.history.push(this.snapshot());this.load(this.future.pop());return true;}
 paint(x,y,color){if(x>=0&&y>=0&&x<this.n&&y<this.n)this.pixels[y*this.n+x]=color;}
 line(a,b,color){let x=a.x,y=a.y,dx=Math.abs(b.x-x),dy=-Math.abs(b.y-y),sx=x<b.x?1:-1,sy=y<b.y?1:-1,err=dx+dy;for(;;){this.paint(x,y,color);if(x===b.x&&y===b.y)break;const e=2*err;if(e>=dy){err+=dy;x+=sx;}if(e<=dx){err+=dx;y+=sy;}}}
 fill(x,y,color){const target=this.pixels[y*this.n+x];if(target===color)return;const q=[y*this.n+x],seen=new Set();while(q.length){const i=q.pop();if(seen.has(i)||this.pixels[i]!==target)continue;seen.add(i);this.pixels[i]=color;const cx=i%this.n,cy=Math.floor(i/this.n);if(cx>0)q.push(i-1);if(cx<this.n-1)q.push(i+1);if(cy>0)q.push(i-this.n);if(cy<this.n-1)q.push(i+this.n);}}
 resize(n){const before=this.snapshot(),old=this.n,p=this.pixels;this.n=n;this.pixels=Array.from({length:n*n},(_,i)=>p[Math.floor(Math.floor(i/n)*old/n)*old+Math.floor((i%n)*old/n)]);this.remember(before);}
}
if(typeof module!=='undefined')module.exports={PixelDrawing};
