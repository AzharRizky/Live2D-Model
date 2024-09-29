/******************************************************************************/
/*  JAVASCRIPT ASSETS                                                         */
/*----------------------------------------------------------------------------*/
/*  Copyright (C) 2023 MINEVERSAL                                             */
/*  Licensed material of MINEVERSAL                                           */
/*----------------------------------------------------------------------------*/
/*  Object              : JSA (JAVASCRIPT ASSETS)                             */
/*  Outline             : JSA (JAVASCRIPT ASSETS)                             */
/*  File ID             : L2DLMPPW-JSA-1                                      */
/*----------------------------------------------------------------------------*/
/*  Author              : Joe                                                 */
/*  Revision Author     : -                                                   */
/*  Created Time        : 2023/12/10 14:16 (UTC+07:00)                        */
/*  Modification Time   : 2023/12/10 14:16 (UTC+07:00)                        */
/*  Version             : 1 (Number of Version)                               */
/*  Revision            : 0 (Number of Revision)                              */
/******************************************************************************/

/******************************************************************************/
/*  Function:                                                                 */
/*      fs_copyText                                                           */
/*  Outline:                                                                  */
/*      Copy the shortlink                                                    */
/*  Parameter:                                                                */
/*      None                                                                  */
/*  Return Value:                                                             */
/*      None                                                                  */
/*  Function Explanation:                                                     */
/*      Copy the shortlink                                                    */
/*  Note:                                                                     */
/*      None                                                                  */
/*  Traceability Reference ID:                                                */
/*      [REF #Zulma-LTLLPW-2_2#];<WOILU-JSA-2_2>                              */
/******************************************************************************/
function fs_copyText() {

    /* Get the text field */
    /* Select the text field */
    c_obj_inputText.select();

    /* Code to copy to the clipboard */
    document.execCommand( "copy" );

    /* Alert the copied text */
    alert( "Link Copied" ); //+ copyText.value);

}

/******************************************************************************/
/*  Function:                                                                 */
/*      fs_clearText                                                          */
/*  Outline:                                                                  */
/*      Clear the text                                                        */
/*  Parameter:                                                                */
/*      None                                                                  */
/*  Return Value:                                                             */
/*      None                                                                  */
/*  Function Explanation:                                                     */
/*      Clear the text                                                        */
/*  Note:                                                                     */
/*      None                                                                  */
/*  Traceability Reference ID:                                                */
/*      None                                                                  */
/******************************************************************************/
function fs_clearText() {

    /* Clear link/text on the input box */
    c_obj_inputText.value = "";

}

/******** END OF FILE *********************************************************/