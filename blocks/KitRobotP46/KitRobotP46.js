//http://learn.makeblock.com/mbot-an-educational-stem-robot-for-kids-and-beginners/

'use strict';

goog.provide('Blockly.Blocks.KitRobotP46');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

// define blocks

Blockly.Blocks['kit_init'] = {
  init: function() {
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("Génerer le code pour le kit:");
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(180);
	this.setHelpUrl("");	
    this.setPreviousStatement(false, null);
    this.setTooltip("");
  }
};

Blockly.Blocks['kit_end'] = {
  init: function() {
  this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField("Fin du code du kit (Attendre à l'infini)");
    this.setInputsInline(true);
    this.setNextStatement(false, null);
    this.setColour(180);
  this.setHelpUrl("");  
    this.setPreviousStatement(true, null);
    this.setTooltip("");
  }
};


Blockly.Blocks['kit_delay'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Attendre")
        .appendField(new Blockly.FieldNumber(1, 0), "temps")
        .appendField("secondes");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_encoder_pwm'] = {
  init: function() {
    this.setColour(230);
  this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Allumer le Moteur du port")
        .appendField(new Blockly.FieldDropdown([["Port1","1"], ["Port2","2"], ["Port3","3"], ["Port4","4"]]), "Port");
  this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("à la puissance")
        .appendField(new Blockly.FieldNumber(0, -255, 255), "PWM");
  this.setHelpUrl("");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
  }
};


Blockly.Blocks['kit_encoder_angle'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Avancer le moteur encodeur du port")
        .appendField(new Blockly.FieldDropdown([["Port1","1"], ["Port2","2"], ["Port3","3"], ["Port4","4"]]), "Port");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("de")
        .appendField(new Blockly.FieldNumber(360), "angle")
        .appendField("degrés");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("à la vitesse")
        .appendField(new Blockly.FieldNumber(200, 0, 300), "rpm")
        .appendField("rpm");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['kit_encoder_speed'] = {
  init: function() {
    this.setColour(230);
  this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Allumer le Moteur du port")
        .appendField(new Blockly.FieldDropdown([["Port1","1"], ["Port2","2"], ["Port3","3"], ["Port4","4"]]), "Port");
  this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("à la vitesse")
        .appendField(new Blockly.FieldNumber(0, -300, 300), "rpm")
        .appendField("rpm");
  this.setHelpUrl("");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
  }
};

Blockly.Blocks['kit_encoder_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Arrêter le moteur encodeur du port")
        .appendField(new Blockly.FieldDropdown([["Port1","1"], ["Port2","2"], ["Port3","3"], ["Port4","4"]]), "Port");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_encoder_reached'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Position du moteur encodeur du port")
        .appendField(new Blockly.FieldDropdown([["Port1","1"], ["Port2","2"], ["Port3","3"], ["Port4","4"]]), "Port")
        .appendField("atteinte");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_motorDC_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Arrêter le moteur DC du port")
        .appendField(new Blockly.FieldDropdown([["Port1A","0"], ["Port1B","1"], ["Port2A","2"], ["Port2B","3"], ["Port3A","4"], ["Port3B","5"], ["Port4A","6"], ["Port4B","7"]]), "port");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_motorDC_run'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Activer le moteur du ")
        .appendField(new Blockly.FieldDropdown([["Port1A","0"], ["Port1B","1"], ["Port2A","2"], ["Port2B","3"], ["Port3A","4"], ["Port3B","5"], ["Port4A","6"], ["Port4B","7"]]), "port");
   this.appendDummyInput()
        .appendField("à la puissance ")
        .appendField(new Blockly.FieldNumber(0, -255, 255), "pwm");
    this.setInputsInline(true);
    this.setColour(45);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_pince_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Arrêter la pince sur le port ")
        .appendField(new Blockly.FieldDropdown([["Port1A","0"], ["Port1B","1"], ["Port2A","2"], ["Port2B","3"], ["Port3A","4"], ["Port3B","5"], ["Port4A","6"], ["Port4B","7"]]), "port");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_pince_open'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ouvrir la pince du port")
        .appendField(new Blockly.FieldDropdown([["Port1A","0"], ["Port1B","1"], ["Port2A","2"], ["Port2B","3"], ["Port3A","4"], ["Port3B","5"], ["Port4A","6"], ["Port4B","7"]]), "port");
   this.appendDummyInput()
        .appendField("à la puissance")
        .appendField(new Blockly.FieldNumber(0, -255, 255), "pwm");
    this.setInputsInline(true);
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_pince_close'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Fermer la pince du port")
        .appendField(new Blockly.FieldDropdown([["Port1A","0"], ["Port1B","1"], ["Port2A","2"], ["Port2B","3"], ["Port3A","4"], ["Port3B","5"], ["Port4A","6"], ["Port4B","7"]]), "port");
   this.appendDummyInput()
        .appendField("à la puissance")
        .appendField(new Blockly.FieldNumber(0, -255, 255), "pwm");
    this.setInputsInline(true);
    this.setColour(0);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_bras_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Arrêter le bras du port ")
        .appendField(new Blockly.FieldDropdown([["Port1A","0"], ["Port1B","1"], ["Port2A","2"], ["Port2B","3"], ["Port3A","4"], ["Port3B","5"], ["Port4A","6"], ["Port4B","7"]]), "port");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_bras_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Monter le bras du port")
        .appendField(new Blockly.FieldDropdown([["Port1A","0"], ["Port1B","1"], ["Port2A","2"], ["Port2B","3"], ["Port3A","4"], ["Port3B","5"], ["Port4A","6"], ["Port4B","7"]]), "port");
   this.appendDummyInput()
        .appendField("à la puissance")
        .appendField(new Blockly.FieldNumber(0, -255, 255), "pwm");
    this.setInputsInline(true);
    this.setColour(300);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_bras_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Baisser le bras du port")
        .appendField(new Blockly.FieldDropdown([["Port1A","0"], ["Port1B","1"], ["Port2A","2"], ["Port2B","3"], ["Port3A","4"], ["Port3B","5"], ["Port4A","6"], ["Port4B","7"]]), "port");
   this.appendDummyInput()
        .appendField("à la puissance")
        .appendField(new Blockly.FieldNumber(0, -255, 255), "pwm");
    this.setInputsInline(true);
    this.setColour(300);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['kit_sensor_ultrasons'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Distance du capteur à ultrasons d'addresse")
        .appendField(new Blockly.FieldNumber(1, 1, 255), "address")
        .appendField("en cm");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['kit_sensor_sharp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Distance du capteur Sharp n°")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"]]), "numb");
    this.appendDummyInput()
        .appendField("d'addresse")
        .appendField(new Blockly.FieldNumber(1, 1, 255), "address");
    this.appendDummyInput()
        .appendField("en")
        .appendField(new Blockly.FieldDropdown([["centimètres","cm"], ["millimètres","mm"]]), "unit");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_sensor_ligne'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Etat du capteur de ligne d'addresse")
        .appendField(new Blockly.FieldNumber(1, 1, 255), "address");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_sensor_fdc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Etat du fin de course n°")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"]]), "numb");
    this.appendDummyInput()
        .appendField("d'addresse")
        .appendField(new Blockly.FieldNumber(1, 1, 255), "address");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_myrobot_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Création de mon robot avec:");
    this.appendDummyInput()
        .appendField("- le moteur gauche sur le port")
        .appendField(new Blockly.FieldDropdown([["Port1","1"], ["Port2","2"], ["Port3","3"], ["Port4","4"]]), "PortG");
    this.appendDummyInput()
        .appendField("- le moteur droit sur le port")
        .appendField(new Blockly.FieldDropdown([["Port1","1"], ["Port2","2"], ["Port3","3"], ["Port4","4"]]), "PortD");
    this.appendDummyInput()
        .appendField("- largeur entre les roue de")
        .appendField(new Blockly.FieldNumber(0, 0), "largeur")
        .appendField("cm");
    this.appendDummyInput()
        .appendField("- Diamètre des roue de")
        .appendField(new Blockly.FieldNumber(0, 0), "diamètre")
        .appendField("cm");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_myrobot_avancer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Avancer mon robot à la vitesse ")
        .appendField(new Blockly.FieldNumber(0, 0, 300), "speed")
        .appendField("rpm");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_myrobot_reculer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Reculer mon robot à la vitesse ")
        .appendField(new Blockly.FieldNumber(0, 0, 300), "speed")
        .appendField("rpm");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['kit_myrobot_gauche'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tourner à gauche avec mon robot à la vitesse ")
        .appendField(new Blockly.FieldNumber(0, 0, 300), "speed")
        .appendField("rpm");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_myrobot_droite'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tourner à droite avec mon robot à la vitesse ")
        .appendField(new Blockly.FieldNumber(0, 0, 300), "speed")
        .appendField("rpm");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_myrobot_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Arrêter mon robot");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_myrobot_avancerCm'] = {
 init: function() {
    this.appendDummyInput()
        .appendField("Avancer mon robot de")
        .appendField(new Blockly.FieldNumber(0, 0), "dist")
        .appendField("cm");
    this.appendDummyInput()
        .appendField("à la vitesse")
        .appendField(new Blockly.FieldNumber(0, 0, 300), "speed")
        .appendField("rpm");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_myrobot_reculerCm'] = {
 init: function() {
    this.appendDummyInput()
        .appendField("Reculer mon robot de")
        .appendField(new Blockly.FieldNumber(0, 0), "dist")
        .appendField("cm");
    this.appendDummyInput()
        .appendField("à la vitesse")
        .appendField(new Blockly.FieldNumber(0, 0, 300), "speed")
        .appendField("rpm");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_myrobot_gaucheAngle'] = {
 init: function() {
    this.appendDummyInput()
        .appendField("Tourner vers la Gauche mon robot de")
        .appendField(new Blockly.FieldNumber(0, 0), "angle")
        .appendField("degrés");
    this.appendDummyInput()
        .appendField("à la vitesse")
        .appendField(new Blockly.FieldNumber(0, 0, 300), "speed")
        .appendField("rpm");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_myrobot_droiteAngle'] = {
 init: function() {
    this.appendDummyInput()
        .appendField("Tourner vers la Droite mon robot de")
        .appendField(new Blockly.FieldNumber(0, 0), "angle")
        .appendField("degrés");
    this.appendDummyInput()
        .appendField("à la vitesse")
        .appendField(new Blockly.FieldNumber(0, 0, 300), "speed")
        .appendField("rpm");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['kit_myrobot_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Activer le moteur gauche du robot à la vitesse")
        .appendField(new Blockly.FieldNumber(0, -300, 300), "speedg")
        .appendField("rpm");
    this.appendDummyInput()
        .appendField("Activer le moteur droit du robot à la vitesse")
        .appendField(new Blockly.FieldNumber(0, -300, 300), "speedd")
        .appendField("rpm");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
