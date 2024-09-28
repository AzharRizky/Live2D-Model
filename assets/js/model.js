/******************************************************************************/
/*  JAVASCRIPT ASSETS                                                         */
/*----------------------------------------------------------------------------*/
/*  Copyright (C) 2020 MINEVERSAL                                             */
/*  Licensed material of MINEVERSAL                                           */
/*----------------------------------------------------------------------------*/
/*  Object              : JSA (JAVASCRIPT ASSETS)                             */
/*  Outline             : JSA (JAVASCRIPT ASSETS)                             */
/*  File ID             : Zulma-JSA-2                                         */
/*----------------------------------------------------------------------------*/
/*  Author              : Joe                                                 */
/*  Revision Author     : -                                                   */
/*  Created Time        : 2024/09/27 10:00 (UTC+07:00)                        */
/*  Modification Time   : 2024/09/27 13:39 (UTC+07:00)                        */
/*  Version             : 1 (Number of Version)                               */
/*  Revision            : 0 (Number of Revision)                              */
/******************************************************************************/

/******************************************************************************/
/*        CONSTANT DATA                                                       */
/******************************************************************************/
const c_list_modelDir = [
    "/assets/models/Saekano/kato/01.json",
    "/assets/models/SAO/asuna/asuna_01/asuna_01.model.json",
    "/assets/models/SAO/asuna/asuna_02/asuna_02.model.json",
    "/assets/models/SAO/asuna/asuna_03/asuna_03.model.json",
    "",
    "",
];

/* Query Selector to Get Input Output Box and Drop Down Element on Page */
const c_obj_inputText = document.querySelector( "#input-output-box" );
const c_obj_modelList = document.querySelector( "#model-list" );


/******************************************************************************/
/*  Function:                                                                 */
/*      fg_changeModel                                                        */
/*  Outline:                                                                  */
/*      Change Live2D Model and send the model API URL                        */
/*  Parameter:                                                                */
/*      l_int_index                                                           */
/*  Return Value:                                                             */
/*      None                                                                  */
/*  Function Explanation:                                                     */
/*      Change Live2D Model and send the model API URL                        */
/*  Note:                                                                     */
/*      None                                                                  */
/******************************************************************************/
function fg_changeModel(){
    new Live2dLoader([
        {
            width: window.innerWidth,
            height: window.innerHeight,
            left: "0px",
            bottom: "0px",
            role: c_list_modelDir[c_obj_modelList.value],
            opacity: 1,
            scale: 0.2,
            mobile: true,
            draggable: true,
        },
    ]);

    c_obj_inputText.value = "https://model.zulma.id" + c_list_modelDir[c_obj_modelList.value];

};