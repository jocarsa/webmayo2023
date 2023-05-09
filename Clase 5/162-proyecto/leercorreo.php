
<?php
            /* gmail connection,with port number 993 */
            $host = '{imap.ionos.com:993
                    novalidate-cert/norsh}INBOX';
            /* Your gmail credentials */
            $user = 'blog@dibujant.es';
            $password = 'Mastermedia123$';
  
            /* Establish a IMAP connection */
            $conn = imap_open($host, $user, $password) 
                 or die('unable to connect Gmail: ' . imap_last_error());
  
            /* Search emails from gmail inbox*/
            $mails = imap_search($conn, 'SUBJECT "Comment"');
  
            /* loop through each email id mails are available. */
            if ($mails) {
  
                /* Mail output variable starts*/
                $mailOutput = '';
                $mailOutput.= '<table><tr><th>Subject </th><th> From  </th> 
                           <th> Date Time </th> <th> Content </th></tr>';
  
                /* rsort is used to display the latest emails on top */
                rsort($mails);
  
                /* For each email */
                foreach ($mails as $email_number) {
  
                    /* Retrieve specific email information*/
                    $headers = imap_fetch_overview($conn, $email_number, 0);
  
                    /*  Returns a particular section of the body*/
                    $message = imap_fetchbody($conn, $email_number, '1');
                    $subMessage = substr($message, 0, 150);
                    $finalMessage = trim(quoted_printable_decode($subMessage));
  
                    $mailOutput.= '<div class="row">';
  
                    /* Gmail MAILS header information */                   
                    $mailOutput.= '<td><span class="columnClass">' .
                                $headers[0]->subject . '</span></td> ';
                    $mailOutput.= '<td><span class="columnClass">' . 
                                $headers[0]->from . '</span></td>';
                    $mailOutput.= '<td><span class="columnClass">' .
                                 $headers[0]->date . '</span></td>';
                    $mailOutput.= '</div>';
  
                    /* Mail body is returned */
                    $mailOutput.= '<td><span class="column">' . 
                    $finalMessage . '</span></td></tr></div>';
                }// End foreach
                $mailOutput.= '</table>';
                echo $mailOutput;
            }//endif 
  
            /* imap connection is closed */
            imap_close($conn);
            ?>