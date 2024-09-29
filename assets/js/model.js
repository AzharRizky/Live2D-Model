/******************************************************************************/
/*  JAVASCRIPT ASSETS                                                         */
/*----------------------------------------------------------------------------*/
/*  Copyright (C) 2020 MINEVERSAL                                             */
/*  Licensed material of MINEVERSAL                                           */
/*----------------------------------------------------------------------------*/
/*  Object              : JSA (JAVASCRIPT ASSETS)                             */
/*  Outline             : JSA (JAVASCRIPT ASSETS)                             */
/*  File ID             : L2DLMPPW-JSA-2                                      */
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
    "/assets/models/Saekano/katou/katou.model.json",                  // 0
    "/assets/models/SAO/asuna/asuna_01/asuna_01.model.json",          // 1
    "/assets/models/SAO/asuna/asuna_02/asuna_02.model.json",          // 2 
    "/assets/models/SAO/asuna/asuna_03/asuna_03.model.json",          // 3
    "/assets/models/SAO/asuna/asuna_04/asuna_04.model.json",          // 4
    "/assets/models/SAO/asuna/asuna_05/asuna_05.model.json",          // 5
    "/assets/models/SAO/asuna/asuna_06/asuna_06.model.json",          // 6
    "/assets/models/SAO/asuna/asuna_06/asuna_07.model.json",          // 7
    "/assets/models/SAO/asuna/asuna_08/asuna_08.model.json",          // 8
    "/assets/models/SAO/asuna/asuna_09/asuna_09.model.json",          // 9
    "/assets/models/SAO/asuna/asuna_10/asuna_10.model.json",          // 10
    "/assets/models/SAO/asuna/asuna_11/asuna_11.model.json",          // 11
    "/assets/models/SAO/asuna/asuna_12/asuna_12.model.json",          // 12
    "/assets/models/SAO/asuna/asuna_13/asuna_13.model.json",          // 13
    "/assets/models/SAO/asuna/asuna_14/asuna_14.model.json",          // 14
    "/assets/models/SAO/asuna/asuna_15/asuna_15.model.json",          // 15
    "/assets/models/SAO/asuna/asuna_16/asuna_16.model.json",          // 16
    "/assets/models/SAO/asuna/asuna_17/asuna_17.model.json",          // 17
    "/assets/models/SAO/asuna/asuna_18/asuna_18.model.json",          // 18
    "/assets/models/SAO/asuna/asuna_19/asuna_19.model.json",          // 19
    "/assets/models/SAO/asuna/asuna_20/asuna_20.model.json",          // 20
    "/assets/models/SAO/asuna/asuna_21/asuna_21.model.json",          // 21
    "/assets/models/SAO/asuna/asuna_22/asuna_22.model.json",          // 22
    "/assets/models/SAO/asuna/asuna_23/asuna_23.model.json",          // 23
    "/assets/models/SAO/asuna/asuna_24/asuna_24.model.json",          // 24
    "/assets/models/SAO/asuna/asuna_25/asuna_25.model.json",          // 25
    "/assets/models/SAO/asuna/asuna_26/asuna_26.model.json",          // 26
    "/assets/models/SAO/asuna/asuna_27/asuna_27.model.json",          // 27
    "/assets/models/SAO/asuna/asuna_28/asuna_28.model.json",          // 28
    "/assets/models/SAO/asuna/asuna_29/asuna_29.model.json",          // 29
    "/assets/models/SAO/asuna/asuna_30/asuna_30.model.json",          // 30
    "/assets/models/SAO/asuna/asuna_31/asuna_31.model.json",          // 31
    "/assets/models/SAO/asuna/asuna_32/asuna_32.model.json",          // 32
    "/assets/models/SAO/asuna/asuna_33/asuna_33.model.json",          // 33
    "/assets/models/SAO/asuna/asuna_34/asuna_34.model.json",          // 34
    "/assets/models/SAO/asuna/asuna_35/asuna_35.model.json",          // 35
    "/assets/models/SAO/asuna/asuna_36/asuna_36.model.json",          // 36
    "/assets/models/SAO/asuna/asuna_37/asuna_37.model.json",          // 37
    "/assets/models/SAO/asuna/asuna_38/asuna_38.model.json",          // 38
    "/assets/models/SAO/asuna/asuna_39/asuna_39.model.json",          // 39
    "/assets/models/SAO/asuna/asuna_40/asuna_40.model.json",          // 40
    "/assets/models/SAO/asuna/asuna_41/asuna_41.model.json",          // 41
    "/assets/models/SAO/asuna/asuna_42/asuna_42.model.json",          // 42
    "/assets/models/SAO/asuna/asuna_43/asuna_43.model.json",          // 43
    "/assets/models/SAO/asuna/asuna_44/asuna_44.model.json",          // 44
    "/assets/models/SAO/asuna/asuna_45/asuna_45.model.json",          // 45
    "/assets/models/SAO/asuna/asuna_46/asuna_46.model.json",          // 46
    "/assets/models/SAO/asuna/asuna_47/asuna_47.model.json",          // 47
    "/assets/models/SAO/asuna/asuna_48/asuna_48.model.json",          // 48
    "/assets/models/SAO/asuna/asuna_49/asuna_49.model.json",          // 49
    "/assets/models/SAO/asuna/asuna_50/asuna_50.model.json",          // 50
    "/assets/models/SAO/asuna/asuna_52/asuna_52.model.json",          // 51
    "/assets/models/SAO/asuna/asuna_53/asuna_53.model.json",          // 52
    "/assets/models/SAO/asuna/asuna_54/asuna_54.model.json",          // 53
    "/assets/models/Konosuba/kazuma_01/1003104.model3.json",          // 54
    "/assets/models/Konosuba/kazuma_02/1004100.model3.json",          // 55
    "/assets/models/Konosuba/kazuma_03/1004107.model3.json",          // 56
    "/assets/models/Konosuba/kazuma_04/1009109.model3.json",          // 57
    "/assets/models/Konosuba/aqua_01/1013104.model3.json",            // 58
    "/assets/models/Konosuba/aqua_02/1014100.model3.json",            // 59
    "/assets/models/Konosuba/aqua_03/1014107.model3.json",            // 60
    "/assets/models/Konosuba/megumin_01/1023104.model3.json",         // 61
    "/assets/models/Konosuba/megumin_02/1024100.model3.json",         // 62
    "/assets/models/Konosuba/megumin_03/1024107.model3.json",         // 63
    "/assets/models/Konosuba/megumin_04/1024113.model3.json",         // 64
    "/assets/models/Konosuba/darkness_01/1033104.model3.json",        // 65
    "/assets/models/Konosuba/darkness_02/1033113.model3.json",        // 66
    "/assets/models/Konosuba/darkness_03/1034100.model3.json",        // 67
    "/assets/models/Konosuba/darkness_04/1034107.model3.json",        // 68
    "/assets/models/Konosuba/darkness_05/1039108.model3.json",        // 69
    "/assets/models/Konosuba/chris_01/1044100.model3.json",           // 70
    "/assets/models/Konosuba/wiz_01/1054100.model3.json",             // 71
    "/assets/models/Konosuba/wiz_02/1054113.model3.json",             // 72
    "/assets/models/Konosuba/yunyun_01/1063113.model3.json",          // 73
    "/assets/models/Konosuba/yunyun_02/1064100.model3.json",          // 74
    "/assets/models/Konosuba/iris_01/1074100.model3.json",            // 75
    "/assets/models/Konosuba/komekko_01/1084100.model3.json",         // 76
    "/assets/models/Konosuba/cecily_01/1094100.model3.json",          // 77
    "/assets/models/Konosuba/arue_01/1104100.model3.json",            // 78
    "/assets/models/Konosuba/kyouya_01/1114100.model3.json",          // 79
    "/assets/models/Konosuba/dust_01/1124100.model3.json",            // 80
    "/assets/models/Konosuba/dust_02/1124110.model3.json",            // 81
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

    if ( c_obj_modelList.value == -1 ) {

        alert("Model not selected yet!")

    } else {

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

    }

};

/******** END OF FILE *********************************************************/