import react from 'react'

class Ddown extends react.Component
{
    constructor()
    {
        super()
        this.state={
            rooms:[
                {
                    RoomNos:'--Select--'
                }
            ]
        }
    }
       
        txtRooms=(e)=>{
            this.setState({rooms:e.target.value})
        }
    render()
    {
        return(
            <div>
                <center>
                    <h1 style={{fontSize:"15px"}}>
                        Hotel:
                    </h1>
                    <hr/>
                    <strong>Rooms: </strong>
                    <select value={this.state.rooms} onChange={this.txtRooms}>
                    <option>Room 0</option>
                    <option>Room 1</option>
                    <option>Room 2</option>
                    <option>Room 3</option>
                    <option>Room 4</option>
                    <option>Room 5</option>
                    <option>Room 6</option>
                    <option>Room 7</option>
                    <option>Room 8</option>
                    <option>Room 9</option>
                    </select>
                </center>
            </div>
        )
    }
}
export default Ddown