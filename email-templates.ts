export const SUCCESSFUL_TEMPLATE = (
  nameGame: string,
  symbol: string,
  amountInSmallUnit: number,
  amountInBigUnit: string,
  nameUnits: string,
  tx: string
) => {
  return `Dear player,

We are glad to have you playing our games, and we have no bigger satisfaction than to reward you for your dedication on playing the ${nameGame}.

For that reason, this email is to inform you that we have just realized the transaction on the ${symbol} network with the ${amountInSmallUnit} ${nameUnits} (${amountInBigUnit} ${symbol} ) requested by you.

We are thankful you played our games, and we would like to hear from your experience doing so, please don't hesitate in giving us a review in the Google Play Store telling how the whole process it was, and helping other users to know about us!

Below we are attaching the tx, so you can track it :)

${tx}

Kind regards from the whole Orim Games team!
`;
};

export const ERROR_TEMPLATE = (nameGame: string) => {
  return `Dear player,

We are glad to have you playing our games, and we have no bigger satisfaction than to reward you for your dedication on playing the ${nameGame} game.

However, after studying your case, we have detected abnormal activities while playing our games and we cannot unfortunately proceed with the withdrawal.

For that reason, we would like to ask you, if you could provide us some proofs of your game progress.

On the meanwhile, your requests will be halted until you answer to this mail.

Kind regards from the whole Orim Games team!
    `;
};

export const WITHDRAWAL_PROCESS_DONE = (
  manyWithdraws: string,
  money: string
) => {
  return `<!DOCTYPE html>
  <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
  
  <head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"><!--<![endif]-->
    <style>
      * {
        box-sizing: border-box;
      }
  
      body {
        margin: 0;
        padding: 0;
      }
  
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
      }
  
      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
      }
  
      p {
        line-height: inherit
      }
  
      .desktop_hide,
      .desktop_hide table {
        mso-hide: all;
        display: none;
        max-height: 0px;
        overflow: hidden;
      }
  
      .image_block img+div {
        display: none;
      }
  
      @media (max-width:700px) {
        .desktop_hide table.icons-inner {
          display: inline-block !important;
        }
  
        .icons-inner {
          text-align: center;
        }
  
        .icons-inner td {
          margin: 0 auto;
        }
  
        .mobile_hide {
          display: none;
        }
  
        .row-content {
          width: 100% !important;
        }
  
        .stack .column {
          width: 100%;
          display: block;
        }
  
        .mobile_hide {
          min-height: 0;
          max-height: 0;
          max-width: 0;
          overflow: hidden;
          font-size: 0px;
        }
  
        .desktop_hide,
        .desktop_hide table {
          display: table !important;
          max-height: none !important;
        }
      }
    </style>
  </head>
  
  <body style="background-color: #1a2b42; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
    <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #1a2b42;">
      <tbody>
        <tr>
          <td>
            <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                            <div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                            <div class="spacer_block block-2" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                            <div class="spacer_block block-3" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                            <div class="spacer_block block-4" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; background-position: top center; width: 680px; margin: 0 auto;" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                            <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tr>
                                <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                  <div class="alignment" align="center" style="line-height:10px"><img src="https://97fd23472c.imgdist.com/public/users/Integrators/BeeProAgency/1074890_1060168/only-logo%20%281%29.png" style="display: block; height: auto; border: 0; max-width: 136px; width: 100%;" width="136"></div>
                                </td>
                              </tr>
                            </table>
                            <div class="spacer_block block-2" style="height:50px;line-height:50px;font-size:1px;">&#8202;</div>
                            <table class="image_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tr>
                                <td class="pad" style="width:100%;">
                                  <div class="alignment" align="center" style="line-height:10px"><img src="https://97fd23472c.imgdist.com/public/users/Integrators/BeeProAgency/1074890_1060168/trofeo.png" style="display: block; height: auto; border: 0; max-width: 653px; width: 100%;" width="653"></div>
                                </td>
                              </tr>
                            </table>
                            <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                              <tr>
                                <td class="pad" style="padding-bottom:10px;padding-left:25px;padding-right:25px;padding-top:10px;">
                                  <div style="color:#ffffff;font-family:'Roboto',Tahoma,Verdana,Segoe,sans-serif;font-size:38px;line-height:150%;text-align:center;mso-line-height-alt:57px;">
                                    <p style="margin: 0; word-break: break-word;"><span><strong><span>This Is What You Were Waiting For</span></strong></span></p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                              <tr>
                                <td class="pad" style="padding-bottom:10px;padding-left:25px;padding-right:25px;padding-top:10px;">
                                  <div style="color:#cccccc;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;line-height:180%;text-align:center;mso-line-height-alt:28.8px;">
                                    <p style="margin: 0; word-break: break-word;"><strong>Great News! All Pending Withdrawals Processed! Your Funds Are On the Way. Thank You for Choosing Us!</strong></p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table class="button_block block-6" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tr>
                                <td class="pad">
                                  <div class="alignment" align="center"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:207px;width:668px;v-text-anchor:middle;" arcsize="8%" strokeweight="3pt" strokecolor="#00AB00" fillcolor="#84ff82"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#1a2b42; font-family:Tahoma, sans-serif; font-size:42px"><![endif]-->
                                    <div style="text-decoration:none;display:block;color:#1a2b42;background-color:#84ff82;border-radius:15px;width:100%;border-top:4px solid #00AB00;font-weight:undefined;border-right:4px solid #00AB00;border-bottom:4px solid #00AB00;border-left:4px solid #00AB00;padding-top:5px;padding-bottom:5px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:42px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:60px;padding-right:60px;font-size:42px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 63px;"><strong>${manyWithdraws} new withdraws processed with a total amount of ${money} 🚀🤑</strong></span></span></div><!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <div class="spacer_block block-7" style="height:25px;line-height:25px;font-size:1px;">&#8202;</div>
                            <table class="button_block block-8" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tr>
                                <td class="pad">
                                  <div class="alignment" align="center"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://play.google.com/store/apps/dev?id=9205738346587560692" style="height:52px;width:262px;v-text-anchor:middle;" arcsize="8%" stroke="false" fillcolor="#de6428"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px"><![endif]--><a href="https://play.google.com/store/apps/dev?id=9205738346587560692" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#de6428;border-radius:4px;width:auto;border-top:0px solid transparent;font-weight:undefined;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:10px;padding-bottom:10px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:60px;padding-right:60px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;"><strong>VIEW ALL GAMES</strong></span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
                                </td>
                              </tr>
                            </table>
                            <div class="spacer_block block-9" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
                            <div class="spacer_block block-10" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-position: center top;">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #131f30; color: #000; width: 680px; margin: 0 auto;" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                            <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tr>
                                <td class="pad" style="width:100%;">
                                  <div class="alignment" align="center" style="line-height:10px"><a href="https://play.google.com/store/apps/details?id=com.OrimGames.RushForCashPlaytoearn" target="_blank" style="outline:none" tabindex="-1"><img src="https://97fd23472c.imgdist.com/public/users/Integrators/BeeProAgency/1074890_1060168/appstore.png" style="display: block; height: auto; border: 0; max-width: 680px; width: 100%;" width="680" alt="Soldier Walking Out" title="Soldier Walking Out"></a></div>
                                </td>
                              </tr>
                            </table>
                            <div class="spacer_block block-2" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
                            <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                              <tr>
                                <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                  <div style="color:#ffffff;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:38px;line-height:120%;text-align:center;mso-line-height-alt:45.6px;">
                                    <p style="margin: 0; word-break: break-word;"><span>Rush x Cash</span></p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <div class="spacer_block block-4" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                            <table class="image_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tr>
                                <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                  <div class="alignment" align="center" style="line-height:10px"><a href="https://play.google.com/store/apps/details?id=com.OrimGames.RushForCashPlaytoearn" target="_blank" style="outline:none" tabindex="-1"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/2081/stars4.5.png" style="display: block; height: auto; border: 0; max-width: 136px; width: 100%;" width="136" alt="Rating" title="Rating"></a></div>
                                </td>
                              </tr>
                            </table>
                            <div class="spacer_block block-6" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                            <table class="divider_block block-7" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tr>
                                <td class="pad">
                                  <div class="alignment" align="center">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="10%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <tr>
                                        <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 3px solid #DE6428;"><span>&#8202;</span></td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <div class="spacer_block block-8" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                            <table class="button_block block-9" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tr>
                                <td class="pad">
                                  <div class="alignment" align="center"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://play.google.com/store/apps/details?id=com.OrimGames.RushForCashPlaytoearn" style="height:48px;width:187px;v-text-anchor:middle;" arcsize="9%" stroke="false" fillcolor="#de6428"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px"><![endif]--><a href="https://play.google.com/store/apps/details?id=com.OrimGames.RushForCashPlaytoearn" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#de6428;border-radius:4px;width:auto;border-top:0px solid transparent;font-weight:undefined;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:10px;padding-bottom:10px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:60px;padding-right:60px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break:break-word;"><strong><span style="line-height: 32px;" data-mce-style>Play now!</span></strong></span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
                                </td>
                              </tr>
                            </table>
                            <div class="spacer_block block-10" style="height:45px;line-height:45px;font-size:1px;">&#8202;</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                            <div class="spacer_block block-1" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                            <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tr>
                                <td class="pad" style="width:100%;">
                                  <div class="alignment" align="center" style="line-height:10px"><img src="https://97fd23472c.imgdist.com/public/users/Integrators/BeeProAgency/1074890_1060168/appstore_2.png" style="display: block; height: auto; border: 0; max-width: 680px; width: 100%;" width="680"></div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            
            <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-position: center top;">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #131f30; color: #000; width: 680px; margin: 0 auto;" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                            <div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                            <div class="spacer_block block-2" style="height:35px;line-height:35px;font-size:1px;">&#8202;</div>
                            <table class="paragraph_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                              <tr>
                                <td class="pad">
                                  <div style="color:#ffffff;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:38px;line-height:120%;text-align:center;mso-line-height-alt:45.6px;">
                                    <p style="margin: 0; word-break: break-word;">Crypto Match - Puzzle Game</p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <div class="spacer_block block-4" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                            <table class="image_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tr>
                                <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                  <div class="alignment" align="center" style="line-height:10px"><a href="https://play.google.com/store/apps/details?id=com.OrimGames.Match3EarnFree" target="_blank" style="outline:none" tabindex="-1"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/2081/stars4.5.png" style="display: block; height: auto; border: 0; max-width: 136px; width: 100%;" width="136" alt="Rating" title="Rating"></a></div>
                                </td>
                              </tr>
                            </table>
                            <div class="spacer_block block-6" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                            <table class="divider_block block-7" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tr>
                                <td class="pad">
                                  <div class="alignment" align="center">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="10%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <tr>
                                        <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 3px solid #DE6428;"><span>&#8202;</span></td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <div class="spacer_block block-8" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                            <table class="button_block block-9" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tr>
                                <td class="pad">
                                  <div class="alignment" align="center"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://play.google.com/store/apps/details?id=com.OrimGames.Match3EarnFree" style="height:56px;width:206px;v-text-anchor:middle;" arcsize="8%" stroke="false" fillcolor="#de6428"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:18px"><![endif]--><a href="https://play.google.com/store/apps/details?id=com.OrimGames.Match3EarnFree" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#de6428;border-radius:4px;width:auto;border-top:0px solid transparent;font-weight:undefined;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:10px;padding-bottom:10px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:18px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:60px;padding-right:60px;font-size:18px;display:inline-block;letter-spacing:normal;"><span style="word-break:break-word;"><span style="line-height: 36px;" data-mce-style>Play now!</span></span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
                                </td>
                              </tr>
                            </table>
                            <div class="spacer_block block-10" style="height:45px;line-height:45px;font-size:1px;">&#8202;</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                            <div class="spacer_block block-1" style="height:45px;line-height:45px;font-size:1px;">&#8202;</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>


            <table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-position: center top;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #131f30; color: #000; width: 680px; margin: 0 auto;" width="680">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
													<div class="spacer_block block-2" style="height:35px;line-height:35px;font-size:1px;">&#8202;</div>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#ffffff;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:38px;line-height:120%;text-align:center;mso-line-height-alt:45.6px;">
																	<p style="margin: 0; word-break: break-word;">You think we are <em>playing😉</em>?</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:10px;padding-left:25px;padding-right:25px;padding-top:10px;">
																<div style="color:#cccccc;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;line-height:180%;text-align:center;mso-line-height-alt:28.8px;">
																	<p style="margin: 0; word-break: break-word;"><strong>Check our last tweets with the transactions links </strong></p>
																	<p style="margin: 0; word-break: break-word;"><strong>and convince yourself!</strong></p>
																</div>
															</td>
														</tr>
													</table>
													<table class="button_block block-5" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://twitter.com/OrimGames" style="height:56px;width:170px;v-text-anchor:middle;" arcsize="8%" stroke="false" fillcolor="#de6428"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:18px"><![endif]--><a href="https://twitter.com/OrimGames" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#de6428;border-radius:4px;width:auto;border-top:0px solid transparent;font-weight:undefined;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:10px;padding-bottom:10px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:18px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:60px;padding-right:60px;font-size:18px;display:inline-block;letter-spacing:normal;"><span style="word-break:break-word;"><span style="line-height: 36px;" data-mce-style>Open</span></span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
															</td>
														</tr>
													</table>
													<div class="spacer_block block-6" style="height:45px;line-height:45px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-10" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<div class="spacer_block block-1" style="height:45px;line-height:45px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-11" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<div class="spacer_block block-1" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>


            <table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                            <div class="spacer_block block-1" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #131f30;">
              <tbody>
                <tr>
                  <td>
                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                            <div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                            <table class="divider_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tr>
                                <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px;">
                                  <div class="alignment" align="center">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="65%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <tr>
                                        <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px dotted #FFFFFF;"><span>&#8202;</span></td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table class="image_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tr>
                                <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                  <div class="alignment" align="center" style="line-height:10px"><img src="https://97fd23472c.imgdist.com/public/users/Integrators/BeeProAgency/1074890_1060168/only-logo%20%281%29.png" style="display: block; height: auto; border: 0; max-width: 237.99999999999997px; width: 100%;" width="237.99999999999997" alt="logo white" title="logo white"></div>
                                </td>
                              </tr>
                            </table>
                            <div class="spacer_block block-4" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
                            <table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                              <tr>
                                <td class="pad" style="padding-bottom:30px;padding-left:25px;padding-right:25px;padding-top:10px;">
                                  <div style="color:#e5e5e5;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:18px;line-height:180%;text-align:center;mso-line-height-alt:32.4px;">
                                    <p style="margin: 0;">Orim Games Studio</p>
                                    <p style="margin: 0;">Earn while you having fun with our amazing games!</p>
                                    <p style="margin: 0;"><a href="https://orimgames.com/" target="_blank" style="text-decoration: underline; color: #ffffff;" rel="noopener">https://orimgames.com/</a></p>
                                    <p style="margin: 0;">For bussines inquiries&nbsp;<a href="mailto:gamesorim@gmail.com" target="_blank" style="text-decoration: underline; color: #ffffff;" rel="noopener">gamesorim@gmail.com</a></p>
                                    <p style="margin: 0;">© Copyrights 2023 <a href="https://orimgames.com/#" target="_blank" style="text-decoration: underline; color: #ffffff;" rel="noopener">Orim Games</a>&nbsp;- All Rights Reserved</p>
                                    <p style="margin: 0;"><a href="mailto:gamesorim@gmail.com?subject=Unsuscribe from list&body=Hello, I want to unsuscribe from your lists and not recieve more emails"" target="_blank" style="text-decoration: underline; color: #ffffff;" rel="noopener">Unsuscribe</a></p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table class="divider_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                              <tr>
                                <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px;">
                                  <div class="alignment" align="center">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="65%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <tr>
                                        <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px dotted #FFFFFF;"><span>&#8202;</span></td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <div class="spacer_block block-7" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table><!-- End -->
  </body>
  
  </html>`;
};
