import styled from "@emotion/styled";
import {useNavigate} from "react-router-dom";
import {InventoryState} from "../enums/InventoryState";

const StyledInventoryBlockSubItem = styled.div`
  display: inline-block;
  height: calc(100% - 20px);
  width: 100%;
  margin: 10px;
  overflow-y: scroll;
  //border: 1px solid black;
`

const StyledInventoryBlockItemBreakdown = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 20px);
  width: 350px;
  //width: 100px;
  margin-left: 10px;
  justify-content: space-between;
  //border: 1px solid black;
`

const StyledInventoryBlock = styled.div`
  display: flex;
  height: 100px;
  width: 80vw;
  border: solid black 1px;
  border-radius: 20px;
  margin: 15px;
  align-items: center;
  transition: all .5s ease;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .box {
    display: inline-block;
    border: 1px black solid;
    height: calc(100% - 20px);
    width: 350px;
    margin-left: 10px;
  }

  :hover {
    background-color: #ee9696;
  }
`;

export class InventoryBlockInterface {
    constructor(id, name, description, costPerHour, state) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.costPerHour = costPerHour
        this.state = InventoryState(state)
    }
}

const InventoryBlockSubItem = ({token}) => {
    return (
        <StyledInventoryBlockSubItem>
            {token}
        </StyledInventoryBlockSubItem>
    )
}

const InventoryBlockItemBreakdown = ({inventoryBlockInterface}) => {
    function costPerHour() {
        return (inventoryBlockInterface.costPerHour / 100).toFixed(2);
    }

    return (
        <StyledInventoryBlockItemBreakdown>
            <div><b>Name: </b>{inventoryBlockInterface.name}</div>
            <div><b>CPH: </b>£{costPerHour()}</div>
            <div><b>Is Available: </b>{inventoryBlockInterface.state}</div>
        </StyledInventoryBlockItemBreakdown>
    )
}

const InventoryBlock = ({inventoryBlockInterface}) => {
    const navigate = useNavigate();

    function navigateToInventoryItemPage() {
        navigate("/inventory/" + inventoryBlockInterface.id)
    }

    return (
        <StyledInventoryBlock onClick={navigateToInventoryItemPage}>
            <div className={"box"}>img</div>
            <InventoryBlockItemBreakdown inventoryBlockInterface={inventoryBlockInterface}></InventoryBlockItemBreakdown>
            <InventoryBlockSubItem token={inventoryBlockInterface.description} />
        </StyledInventoryBlock>
    )
}

export default InventoryBlock;