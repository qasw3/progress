var sketchProc = function(processingInstance) {
     with (processingInstance) {
          var t1=[19+10.64/60,21+17.81/60,19+40/60,19+52.56/60,19+31.68/60,18+44.51/60,17+10.40/60,15+56.07/60,17+37.01/60,16+23.78/60];
var t5=[22+13.69/60,25+55.09/60,21+19.66/60,20+50/60,20+33/60,21+36.68/60,19+42.12/60,19+8.2/60,20+9.09/60,18+16.79/60];
var avg=[21+19.77/60,23+44.06/60,20+39.19/60,20+26.04/60,20+9.29/60,20+26.87/60,18+23.01/60,17+54.28/60,18+37.26/60,17+26.64/60];
var rank=[167,195,154,142,146,144,93,66,89,46];

var t1f=[22+24.69/60,22+10.76/60,20+12.62/60,22+52.40/60,22+25.59/60,22+48.22/60,20+45.91/60,19+54.60/60,18+52.59/60,17+34.18/60];
var t5f=[25+51.6/60,26+57.32/60,27+19/60,27+59.16/60,24+37.55/60,24+34.62/60,23+31.07/60,21+17.07/60,22+50.27/60,22+42.88/60];
var avgf=[24+29.97/60,24+22.47/60,23+53.75/60,25+15.58/60,23+45.87/60,23+50.62/60,21+58.47/60,20+31.51/60,20+50.65/60,20+43.10/60];
var rankf=[127,117,112,125,109,107,75,29,38,52];
var margin=33;
var scale1=20;
var spacing=50;
var on=true;
var onf=true;
var range=true;
var rangef=true;
var ron=true;
var ronf=true;

function zero(num){
    if(num.toString().length===2){
        return num.toString();
    }
    else if(num.toString().length===1){
        return "0"+num.toString();
    }
}

draw= function() {
background(184, 160, 160);
//{
    strokeWeight(1);
    stroke(235, 235, 235);
    fill(0);
    for(var i=0;i<avg.length;i++){
        line(i*spacing+margin,300,i*spacing+margin,300-scale1*15);
        fill(0);
        textSize(11);
        textAlign(CENTER,TOP);
        text(2013+i,i*spacing+margin,300);
    }
    for(var i=0;i<15;i++){
        line(margin,300-i*scale1,(avg.length-1)*spacing+margin,300-scale1*i);
        if(i%2===0){
        fill(0);
        textSize(11);
        if(on||onf||range||rangef){
        textAlign(RIGHT,CENTER);
        text(14+i+":00",margin,300-i*scale1);
        }
        if(ron||ronf){
        textAlign(LEFT,CENTER);
        text((i)*14,margin+(avg.length-1)*spacing+2,300-i*scale1);
        }
        }
    }
    
//}//Grid
//{
noStroke();
fill(0,0,255,100);
if(range){
beginShape();
for(var i=0;i<avg.length;i++){
    vertex(i*spacing+margin,300-(t1[i]-14)*scale1);
    noFill();
    stroke(0);
    //ellipse(i*spacing+margin,300-(t1[i]-14)*scale1,5,5);
    noStroke();
    fill(0,0,255,100);
}
for(var i=avg.length-1;i>=0;i--){
    vertex(i*spacing+margin,300-(t5[i]-14)*scale1);
    noFill();
    stroke(0);
    //ellipse(i*spacing+margin,300-(t5[i]-14)*scale1,5,5);
    noStroke();
    fill(0,0,255,100);
}
endShape();
}
noFill();
stroke(0);
strokeWeight(2);

strokeWeight(1);
noStroke();
fill(255,0,255,100);
if(rangef){
beginShape();
for(var i=0;i<avgf.length;i++){
    vertex(i*spacing+margin,300-(t1f[i]-14)*scale1);
    noFill();
    stroke(0);
    //ellipse(i*spacing+margin,300-(t1f[i]-14)*scale1,5,5);
    noStroke();
    fill(255,0,255,100);
}
for(var i=avgf.length-1;i>=0;i--){
    vertex(i*spacing+margin,300-(t5f[i]-14)*scale1);
    noFill();
    stroke(0);
    //ellipse(i*spacing+margin,300-(t5f[i]-14)*scale1,5,5);
    noStroke();
    fill(255,0,255,100);
}
endShape();
}
noFill();
stroke(0);
strokeWeight(2);
if(onf){
beginShape();
for(var i=0;i<avgf.length;i++){
    vertex(i*spacing+margin,300-(avgf[i]-14)*scale1);
    noStroke();
    fill(0);
    ellipse(i*spacing+margin,300-(avgf[i]-14)*scale1,5,5);
    stroke(0);
    noFill();
}
endShape();
}
if(on){
beginShape();
for(var i=0;i<avg.length;i++){
    vertex(i*spacing+margin,300-(avg[i]-14)*scale1);
    noStroke();
    fill(0);
    ellipse(i*spacing+margin,300-(avg[i]-14)*scale1,5,5);
    stroke(0);
    noFill();
}
endShape();
}
if(ron){
beginShape();
for(var i=0;i<rank.length;i++){
    vertex(i*spacing+margin,300-(rank[i]*scale1/14));
    noStroke();
    fill(0,0,255);
    ellipse(i*spacing+margin,300-(rank[i]*scale1/14),5,5);
    stroke(0, 0, 255);
    noFill();
}
endShape();
}
if(ronf){
beginShape();
for(var i=0;i<rankf.length;i++){
    vertex(i*spacing+margin,300-(rankf[i]*scale1/14));
    noStroke();
    fill(255,0,255);
    ellipse(i*spacing+margin,300-(rankf[i]*scale1/14),5,5);
    stroke(255, 0, 255);
    noFill();
}
endShape();
}
//}//Graphs
//{
    cursor(ARROW);
    for(var i=0;i<3;i++){
        fill(255);
        stroke(0);
        strokeWeight(1);
        rect(50,400+i*50,10,10);
        rect(300,400+i*50,10,10);
        if(mouseY>400+i*50&&mouseY<410+i*50){
        if(mouseX>50&&mouseX<60){
            cursor(HAND);
        }
        else if(mouseX>300&&mouseX<310){
            cursor(HAND);
        }
        }
    }
    textAlign(CENTER,CENTER);
    fill(0);
    textSize(30);
    text("Boys",175,350);
    text("Girls",425,350);
    textSize(20);
    fill(0);
    textAlign(LEFT,CENTER);
    text("Average",75,402);
    text("Range",75,452);
    text("Ranking",75,502);
    text("Average",325,402);
    text("Range",325,452);
    text("Ranking",325,502);
    if(on){
        fill(0);
        noStroke();
        rect(52,402,7,7);
    }
    if(onf){
        fill(0);
        noStroke();
        rect(302,402,7,7);
    }
    if(range){
        fill(0);
        noStroke();
        rect(52,452,7,7);
    }
    if(rangef){
        fill(0);
        noStroke();
        rect(302,452,7,7);
    }
    if(ron){
        fill(0);
        noStroke();
        rect(52,502,7,7);
    }
    if(ronf){
        fill(0);
        noStroke();
        rect(302,502,7,7);
    }
//}//Checkboxes
if(mouseX>margin&&mouseX<margin+(avg.length-1)*spacing&&mouseY<300&&mouseY>300-scale1*15){
    var year=round((mouseX-margin)/spacing);
    strokeWeight(1);
    stroke(0);
    line(round((mouseX-margin)/spacing)*spacing+margin,300,round((mouseX-margin)/spacing)*spacing+margin,300-scale1*15);
    noStroke();
    fill(255);
    rect(mouseX,mouseY-70,120,70);
    textSize(8);
    textAlign(LEFT,BASELINE);
    fill(0);
    text(year+2013,mouseX+45,mouseY-62);
    text("Boys:"+
    (range?"\nMin: "+floor(t1[year])+":"+zero(floor((t1[year]-floor(t1[year]))*60))+"\nMax: "+floor(t5[year])+":"+zero(floor((t5[year]-floor(t5[year]))*60)):"")+
    (on?"\nAvg.: "+floor(avg[year])+":"+zero(floor((avg[year]-floor(avg[year]))*60)):"")+
    (range?"\n1-5: "+floor(t5[year]-t1[year])+":"+zero(floor(((t5[year]-t1[year])-floor(t5[year]-t1[year]))*60)):"")+
    (ron?"\nRank:"+rank[year]:""),
    mouseX+5,mouseY-57);
    
    text("Girls:"+
    (rangef?"\nMin: "+floor(t1f[year])+":"+zero(floor((t1f[year]-floor(t1f[year]))*60))+"\nMax: "+floor(t5f[year])+":"+zero(floor((t5f[year]-floor(t5f[year]))*60)):"")+
    (onf?"\nAvg.: "+floor(avgf[year])+":"+zero(floor((avgf[year]-floor(avgf[year]))*60)):"")+
    (rangef?"\n1-5: "+floor(t5f[year]-t1f[year])+":"+zero(floor(((t5f[year]-t1f[year])-floor(t5f[year]-t1f[year]))*60)):"")+
    (ronf?"\nRank:"+rankf[year]:""),
    mouseX+65,mouseY-57);
}
};
mouseClicked=function(){
    for(var i=0;i<3;i++){
        if(mouseY>400+i*50&&mouseY<410+i*50){
        if(mouseX>50&&mouseX<60){
            switch(i){
                case 0:
                    on=!on;
                break;
                case 1:
                    range=!range;
                break;
                case 2:
                    ron=!ron;
                break;
            }
        }
        else if(mouseX>300&&mouseX<310){
            switch(i){
                case 0:
                    onf=!onf;
                break;
                case 1:
                    rangef=!rangef;
                break;
                case 2:
                    ronf=!ronf;
                break;
            }
        }
        }
    }
};

     }
}
