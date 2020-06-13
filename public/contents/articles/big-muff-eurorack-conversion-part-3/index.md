---
title: Big Muff Eurorack Conversion, Pt. 3
author: luke
date: 2018-02-04 12:50
template: post.hbs
---
*[Part One](http://www.lukehansford.me/articles/big-muff-eurorack-conversion-part-1/)*
*[Part Two](http://www.lukehansford.me/articles/big-muff-eurorack-conversion-part-2/)*

## Switching the switch / Converting the power to Eurorack format

![The new switch](https://i.imgur.com/lfKEt4B.jpg)

Foot switches are, understandably, a little hard to press down. They're built to withstand the unsubtle 
kicks of a guitarist in motion, but applying that much pressure to the Big Muff as it sits in my Eurorack case 
make me worry it'll do damage to the case (doubly so as my case is made out of cardboard!).

So the next task in my Big Muff Eurorack conversion was to replace the foot switch with a toggle switch. The 
original switch was a 3PDT switch (a less common variation of switch, but one that allows for proper signal bypass), 
so it was just a matter of tracking down a 3PDT toggle switch ([I used these ones](https://www.aliexpress.com/item/MYLB-AC-250V-2A-125V-5A-ON-ON-2-Position-3PDT-Toggle-Switch/32746132468.html)) and switching over the wires.

![Not quite right](https://i.imgur.com/IynmfWK.jpg)

As you can see, it technically worked, but I forgot to account for the size of the hole in the panel. My current 
hack solution is to duct tape it in while I think of a more long-term fix.

![The step-down circuit prior to soldering](https://i.imgur.com/VnUhfmB.jpg)

My next step was to get the pedal running off my eurorack case's power supply. This involved adding a 
shrouded 10-pin header for connecting to the power bus board, and then adding a circuit to drop the 12v power 
provided by the case's power supply down to the 9v level expected by the Big Muff.

![The step-down circuit post soldering and attaching to the PCB](https://i.imgur.com/pIpXr2j.jpg)

The circuit utilises an LM7809 component to drop the voltage down to 9v, and is based on some of the 
talk in [this thread over at Muff Wiggler](https://www.muffwiggler.com/forum/viewtopic.php?t=115780). 
I soldered the components on to some perfboard and attached that to the Big Muff's PCB using a 
standoff. It's a bit wobbly, and the whole board is just hanging from wires attached to the front panel, 
but for now its doing the trick. My next goal is to add CV to the tone and sustain potentiometers (possibly 
volume as well, though I'm not certain yet).