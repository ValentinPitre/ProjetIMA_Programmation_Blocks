var MSG = {
  title: "Developing programs made easy: with the visual tool for Arduino / Peguino and compatible. Inspired by BlocklyDuino, based on Blockly.",
  labelArduinoCard: "ボード ",
  btn_switch: " modify menu orientation",
  btn_variable: "OK",
  span_card_picture_change: "Change",
  span_config: " ブロック設定",
  span_config_kit: "Configure Kit",
  span_picture: " show Arduino card",
  span_wiring: " Connecting Board",
  span_supervision: " Supervision",
  span_delete: " ワークスペースをクリア",
  span_saveXML:" プロジェクトを保存",
  span_fakeload:" プロジェクトを開く",
  span_example: " サンプルを開く",
  span_create_example: " サンプルを編集",
  span_doc: " Wiki",
  span_tuto: " Forum",
  span_videos: " Video Tutorials",
  span_miniMenuPanel: " Change button size",
  span_undo: "Undo (ctrl+z)",
  span_redo: "Redo (ctrl+y)",
  span_block_capture: "Screenshot ",
  span_copycode: "Copy code",
  span_configGlobal: " Global configuration",
  span_levelChoice: " level choice",
  span_font: " Font ",
  span_colors: " Colors ",
  span_reset: " Reset workspace & preferences",
  span_blockfactory: " blocks factory ",
  span_RGB: " Convert Color <-> RGB Values",
  span_convert: " Convert Text <-> Binary",
  span_bin2txt: " Binary -> Text ",
  span_txt2bin: " Text -> Binary ",
  span_edit_code: " Edit source code",
  span_saveIno: " Save code as '.ino' file",
  span_verify_local: " Test code with Arduino IDE",
  span_flash_local: " Transfer to the Board",
  span_flash_local_result: " Result of transfer",
  span_detailedCompilation: " Detailed results",
  firstModalLabel: "Welcome to Blockly@rduino!",
  span_first_msg: "Don't see this message again ",
  btn_valid_first_msg: "OK",
  exampleModalLabel: "choose an example",
  convertModalLabel: "Convert Binary <-> ASCII Text",
  RGBModalLabel: "Convert Color <-> Code",
  configModalGlobalLabel: " プロジェクトの設定",
  configGlobalLabel: " プロジェクトの設定 ",
  span_languageMenu: "言語: ",
  span_colorToggle: "白黒・カラー: ",
  span_colorBW: "白黒",
  span_colorColors: "カラー",
  span_toolbox_algo: "Algorithm only",
  span_toolbox_arduino_1: "Arduino level 1",
  span_toolbox_arduino_2: "Arduino level 2",
  span_toolbox_arduino_3: "Arduino level 3",
  span_toolbox_arduino_4: "Arduino level 4",
  span_toolbox_all: "Arduino all!",
  span_OnLine: "Yes",
  span_OffLine: "No",
  span_Upload: "Upload with: ",
  span_Upload_local: "Local server ",
  cb_cf_verify_btn: "Verify code",
  btn_edit_code :"ソースコードを編集",
  cb_cf_flash_btn: "Transfer to the Board",
  button_saveArduino: "'.ino' で保存",
  span_pasteIDEArduino: "Copy to the Arduino IDE",
  span_connect_serial: " Connect to Serial Console",
  a_blocks:" ブロック",
  a_arduino:" ソースコードを見る",
  a_term:" Serial Console",
  configModalLabel:"ブロックカテゴリの選択",
  span_functionToggle:" Sort Block categories by ",
  span_functionON:"Reference",
  span_functionOFF:"Function",
  span_pymata_upload_text:"Upload PyMata-AIO: ",
  span_pymata_toggle_text:"Communication Server: ",
  span_pymataON:"ON",
  span_pymataOFF:"OFF",
  span_select_all:"All",
  btn_close:"Close",
  btn_valid:"OK",
  btn_saveConfig:"Save Configuration",
  editModalLabel:"Edit Arduino source code",
  btn_closeCode:"Cancel",
  btn_validCode:"OK",
  btn_size_min:"Minimize the window",
  btn_size_max:"Maximize the window",
  btn_preview:"Preview Arduino source code",
  btn_inline:"Toggle inline blocks",
  httpRequestError: "There was a problem with the request.",
  linkAlert: "Share your blocks with this link:\n\n%1",
  hashError: "Sorry, '%1' doesn't correspond with any saved program.",
  xmlError: "Could not load your saved file. Maybe it was created with a different version of Blockly?",
  xmlLoad:"Do you want to replace the current blocks? \n 'Cancel' will merge",
  timeout: "Maximum execution iterations exceeded.",
  badCode: "Program error :\n%1",
  discard: "Delete all Blocks (%1 blocks) ?",
  badXml: "Error parsing XML:\n%1\n\nSelect 'OK' to abandon your changes or 'Cancel' to go back.",
  pre_verify:"Verification .... ",
  verification_succeed: "Verification completed successfully. Size : ",
  verification_failed:"Verification failed. Error : ",
  arduino_card:"Delete all and select a Board",
  span_about:"About",
  aboutModalLabel:"About Blockly@rduino",
  aboutBody:"<br />Development and adaptations by Sébastien Canet(<a href='mailto:sebastien.canet@ac-nantes.fr' traget=_blank>sebastien.canet@ac-nantes.fr</a>), additional work on CSS and JS functions by Olivier Metayer, <b>thanks to all contributors (meet them at the developer forum)!</b>"
	+ "<br />"
	+ "<br />Thanks to:",
  msg_ajax_ko:"AJAX requests are not supported by your browser, the following features\n"
	+ "will not be operational : \n"
	+ "- Load Blocks through url \n"
	+ "- Supervision"
	+ "\n\n"
	+ "For Chrome, please check here :\n"
	+ "http://www.chrome-allow-file-access-from-file.com\n",
  span_ajax_msg:"Do not show this message again",
  span_forms:"ENJOY SOFTWARE TINKERING!",
  span_menu_1:"Projects",
  span_menu_11:"Open...",
  span_menu_12:"Save as...",
  span_menu_13:"Examples",
  span_menu_131:"Open example",
  span_menu_132:"Manage example",
  span_menu_133:"Github example",
  span_menu_2:"Steps",
  span_menu_21:"Wiring",
  span_menu_22:"Supervision",
  span_menu_23:"Blocks",
  span_menu_24:"Code",
  span_menu_25:"Console",
  span_menu_3:"Tools",
  span_menu_31:"Conversions",
  span_menu_32:"Colors",
  span_menu_4:"Options",
  span_menu_41:"Global configuration",
  span_menu_42:"Difficulty level",
  span_menu_420:"Algorithm only",
  span_menu_421:"Arduino level 1",
  span_menu_422:"Arduino level 2",
  span_menu_423:"Arduino level 3",
  span_menu_424:"Arduino level 4",
  span_menu_429:"Arduino all!",
  span_menu_43:"Block categories",
  span_menu_44:"Accessibility",
  span_menu_441:"Colors",
  span_menu_442:"Font",
  span_menu_5:"Help",
  span_menu_51:"Videos",
  span_menu_52:"Wiki",
  span_menu_53:"Forum",
  span_menu_6:"About ",
};
