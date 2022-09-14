import React from 'react' 

var datetime = () =>
{
    var showdate=new Date();
    var displaytodaysdate=showdate.getDate()+'/'+showdate.getMonth()+'/'+showdate.getFullYear();
    return(
        <div>
            <center>
            <input style={{textAlign:"Center",Color:"black",fontSize:"30px",}} type="text" value={displaytodaysdate} readOnly="true"/>
            </center>
        </div>
    );
}
export default datetime;



