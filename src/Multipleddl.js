import React from 'react'
import Select from 'react-select'

function Multipleddl()
{
    var Childage=[
        {
            value:1,
            label:
            <select>
            <option>age1</option>
            </select>
        },
        {
            value:2,
            label:
            <select>
            <option>age2</option>
            </select>

        }
    ];
    return (
        <div>
          <Select isMulti options={Childage}></Select>
        </div>
    );
}
export default Multipleddl;