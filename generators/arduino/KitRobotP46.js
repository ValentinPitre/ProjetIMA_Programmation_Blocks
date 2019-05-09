//http://www.makeblock.cc/mbot/

'use strict';

goog.provide('Blockly.Arduino.KitRobotP46');

goog.require('Blockly.Arduino');

Blockly.Arduino.kit_init = function() {
	Blockly.Arduino.includes_['include_mbot'] = '#include <Arduino.h>\n'
	  + '#include <MyRobot.h>\n'
	  + '#include <Wire.h>';

	for(var i=1;i<5;i++)
	{
		Blockly.Arduino.setups_["setup_interrupt"+i] = 
		"attachInterrupt(Motor"+i+".getIntNum(), isr_process_encoder"+i+", RISING);";

		Blockly.Arduino.definitions_['var_motor'+i] = "MoteurEncodeur Motor"+i+"("+i+");";

		Blockly.Arduino.definitions_['define_isr_process_encoder'+i] = "void isr_process_encoder"+i+"(void)\n"+
		"{\n"+
		"  if(digitalRead(Motor"+i+".getPinB()) == 1){\n"+
		" 	 Motor"+i+".pulsePosMinus();\n"+
		"  }else{\n"+
		" 	 Motor"+i+".pulsePosPlus();}\n"+
		"}\n";
	}

	//Cette Fonction ne peut pas etre définie dans les fonctions d'encodeurs, d'où l'interret de créer un block "générer code"
	Blockly.Arduino.definitions_['define_NewLoop'] = "void _loop()\n"+
		"{\n"+
		"  Motor1.loop();\n"+
		"  Motor2.loop();\n"+
		"  Motor3.loop();\n"+
		"  Motor4.loop();\n"+
		"}\n";

	var code="";
	return code;
};

Blockly.Arduino.kit_end = function() {
  var code = 'while(1){_loop();}\n';
  return code;
};


Blockly.Arduino.kit_delay = function() {
  var number_temps = this.getFieldValue('temps');

  Blockly.Arduino.definitions_['define_NewDelay'] = "void _delay(float seconds) "+
		"{\n"+
		"  long endTime = millis() + 1000*seconds;\n"+
		"  while(millis() < endTime)_loop();\n"+
		"}\n";

  var code = '_delay('+number_temps+');\n';
  return code;
};

Blockly.Arduino.kit_encoder_pwm = function() {
 	var number_port = this.getFieldValue('Port') || '\'\'';
  	var number_pwm = this.getFieldValue('PWM');

	var code="Motor"+number_port+".setTarPWM("+number_pwm+");\n";
	return code;
};

Blockly.Arduino.kit_encoder_angle = function() {
  var number_port = this.getFieldValue('Port') || '\'\'';
  var number_angle = this.getFieldValue('angle');
  var number_rpm = this.getFieldValue('rpm');

  var code = 'Motor'+number_port+'.moveTo('+number_angle+',abs('+number_rpm+'));\n';
  return code;
};


Blockly.Arduino.kit_encoder_speed = function() {
 	var number_port = this.getFieldValue('Port') || '\'\'';
  	var number_rpm = this.getFieldValue('rpm');

	var code="Motor"+number_port+".runSpeed("+number_rpm+");\n";
	return code;
};


Blockly.Arduino.kit_encoder_stop= function() {
  var number_port = this.getFieldValue('Port') || '\'\'';
  var code = "Motor"+number_port+".stop();\n";
  return code;
};

Blockly.Arduino.kit_encoder_reached= function() {
  var number_port = this.getFieldValue('Port') || '\'\'';
  var code = "Motor"+number_port+".isTarPosReached()";
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.kit_motorDC_stop= function() {
  var dropdown_port = this.getFieldValue('port') || '\'\'';

  Blockly.Arduino.definitions_['var_motorDC'+dropdown_port] = 'MotorDC MotorDC'+dropdown_port+'('+dropdown_port+');';

  var code = "MotorDC"+dropdown_port+".stop();\n";
  return code;
};

Blockly.Arduino.kit_motorDC_run= function() {
  var dropdown_port = this.getFieldValue('port') || '\'\'';
  var number_pwm = this.getFieldValue('pwm');
  Blockly.Arduino.definitions_['var_motorDC'+dropdown_port] = 'MotorDC MotorDC'+dropdown_port+'('+dropdown_port+');';

  var code = "MotorDC"+dropdown_port+".run("+number_pwm+");\n";
  return code;
};

Blockly.Arduino.kit_pince_stop= function() {
  var dropdown_port = this.getFieldValue('port') || '\'\'';

  Blockly.Arduino.definitions_['var_pince'+dropdown_port] = 'Pince Pince'+dropdown_port+'('+dropdown_port+');';

  var code = "Pince"+dropdown_port+".stop();\n";
  return code;
};

Blockly.Arduino.kit_pince_open= function() {
  var dropdown_port = this.getFieldValue('port') || '\'\'';
  var number_pwm = this.getFieldValue('pwm');
  Blockly.Arduino.definitions_['var_pince'+dropdown_port] = 'Pince Pince'+dropdown_port+'('+dropdown_port+');';

  var code = "Pince"+dropdown_port+".open("+number_pwm+");\n";
  return code;
};


Blockly.Arduino.kit_pince_close= function() {
  var dropdown_port = this.getFieldValue('port') || '\'\'';
  var number_pwm = this.getFieldValue('pwm');
  Blockly.Arduino.definitions_['var_pince'+dropdown_port] = 'Pince Pince'+dropdown_port+'('+dropdown_port+');';

  var code = "Pince"+dropdown_port+".close("+number_pwm+");\n";
  return code;
};


Blockly.Arduino.kit_bras_stop= function() {
  var dropdown_port = this.getFieldValue('port') || '\'\'';

  Blockly.Arduino.definitions_['var_bras'+dropdown_port] = 'Bras Bras'+dropdown_port+'('+dropdown_port+');';

  var code = "Bras"+dropdown_port+".stop();\n";
  return code;
};

Blockly.Arduino.kit_bras_up= function() {
  var dropdown_port = this.getFieldValue('port') || '\'\'';
  var number_pwm = this.getFieldValue('pwm');
  Blockly.Arduino.definitions_['var_bras'+dropdown_port] = 'Bras Bras'+dropdown_port+'('+dropdown_port+');';

  var code = "Bras"+dropdown_port+".up("+number_pwm+");\n";
  return code;
};


Blockly.Arduino.kit_bras_down= function() {
  var dropdown_port = this.getFieldValue('port') || '\'\'';
  var number_pwm = this.getFieldValue('pwm');
  Blockly.Arduino.definitions_['var_bras'+dropdown_port] = 'Bras Bras'+dropdown_port+'('+dropdown_port+');';

  var code = "Bras"+dropdown_port+".down("+number_pwm+");\n";
  return code;
};


Blockly.Arduino.kit_sensor_ultrasons= function() {
  var number_address = this.getFieldValue('address');

  Blockly.Arduino.definitions_['var_ultrasonic_'+number_address] = 'CapteurUltrasons MyCapteurUS_'+number_address+'('+number_address+');\n';

  var code = "MyCapteurUS_"+number_address;
  code += '.DistanceCm()';			 
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.kit_sensor_sharp= function() {
  var number_numb = this.getFieldValue('numb');
  var number_address = this.getFieldValue('address');
  var dropdown_unit = this.getFieldValue('unit');

  Blockly.Arduino.definitions_['var_SHARP_'+number_address+'_'+number_numb] = 'CapteurSharp MonCapteur_Sharp'+number_address+'_'+number_numb+'('+number_address+','+number_numb+');\n';

  var code = "MonCapteur_Sharp"+number_address+'_'+number_numb;

  if(dropdown_unit==="cm"){
    code += '.DistanceCm()';
  } else {
    code += '.DistanceMm()';
  }
			
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.kit_sensor_ligne= function() {
  var number_address = this.getFieldValue('address');

  Blockly.Arduino.definitions_['var_line_sensor_'+number_address] = 'CapteurDeLignes MonCapteurDeLignes'+number_address+'('+number_address+');\n';

  var code = "MonCapteurDeLignes"+number_address+".State()";
		
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}; 

Blockly.Arduino.kit_sensor_fdc= function() {
  var number_numb = this.getFieldValue('numb');
  var number_address = this.getFieldValue('address');

  Blockly.Arduino.definitions_['var_FDC_'+number_address+'_'+number_numb] = 'FinDeCourse MonCapteurFdC'+number_address+'_'+number_numb+'('+number_address+','+number_numb+');\n';

  var code = "MonCapteurFDC"+number_address+'_'+number_numb+".State()";

			
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.kit_myrobot_init= function() {
  var dropdown_portg = this.getFieldValue('PortG');
  var dropdown_portd = this.getFieldValue('PortD');
  var number_largeur = this.getFieldValue('largeur');
  var number_diametre = this.getFieldValue('diamètre');

  Blockly.Arduino.definitions_['var_myrobotkit'] = 'MyRobot Robot'+'(&Motor'+dropdown_portg+',&Motor'+dropdown_portd+','+number_diametre+','+number_largeur+');\n';

  var code ="";
  return code;
};


Blockly.Arduino.kit_myrobot_avancer= function() {
	var number_speed = this.getFieldValue('speed');

	var code = 'Robot.avancer('+number_speed+');\n';
	return code;
};

Blockly.Arduino.kit_myrobot_reculer= function() {
	var number_speed = this.getFieldValue('speed');

	var code = 'Robot.reculer('+number_speed+');\n';
	return code;
};

Blockly.Arduino.kit_myrobot_gauche= function() {
	var number_speed = this.getFieldValue('speed');

	var code = 'Robot.gauche('+number_speed+');\n';
	return code;
};

Blockly.Arduino.kit_myrobot_droite= function() {
	var number_speed = this.getFieldValue('speed');

	var code = 'Robot.droite('+number_speed+');\n';
	return code;
};

Blockly.Arduino.kit_myrobot_stop= function() {
	var code = 'Robot.stop();\n';
	return code;
};

Blockly.Arduino.kit_myrobot_avancerCm= function() {
	var number_dist = this.getFieldValue('dist');
	var number_speed = this.getFieldValue('speed');

	var code = 'Robot.avancerCm('+number_speed+','+number_dist+');\n';
	return code;
};

Blockly.Arduino.kit_myrobot_reculerCm= function() {
	var number_dist = this.getFieldValue('dist');
	var number_speed = this.getFieldValue('speed');

	var code = 'Robot.reculerCm('+number_speed+','+number_dist+');\n';
	return code;
};

Blockly.Arduino.kit_myrobot_gaucheAngle= function() {
	var number_angle = this.getFieldValue('angle');
	var number_speed = this.getFieldValue('speed');

	var code = 'Robot.gaucheAngle('+number_speed+','+number_angle+');\n';
	return code;
};

Blockly.Arduino.kit_myrobot_droiteAngle= function() {
	var number_angle = this.getFieldValue('angle');
	var number_speed = this.getFieldValue('speed');

	var code = 'Robot.droiteAngle('+number_speed+','+number_angle+');\n';
	return code;
};

Blockly.Arduino.kit_myrobot_move= function() {
	var number_speedg = this.getFieldValue('speedg');
	var number_speedd = this.getFieldValue('speedd');

	var code = 'Robot.move('+number_speedg+','+number_speedd+');\n';
	return code;
};

