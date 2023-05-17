import { Fragment, useState } from "react";
import { MouseEvent, ReactNode } from "react";

/**
 * Properties with
 * @param {ReactNode} children idk what this does
 * @param {string} items array of items to put in List
 * @param {string} heading title of list
 * @param {(item: string) => void} onSelectItem does something when item is selected
 */
interface Props {
  children?: ReactNode;
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
  //onClose: () => void;
}

/**
 * Component that returns a list of items
 * @param items
 * @param heading
 * @param onSelectItem
 * @returns ListGroup
 */
function ListGroup({ items, heading, onSelectItem }: Props) {
  //contains curr: index and a setCurr method to set current index
  const [curr, setCurr] = useState(-1);
  //prints button that is pressed
  const handleClick = (e: MouseEvent) => console.log(e.button);
  return (
    <>
      <h1>{heading}</h1>
      {items.length == 0 && <p>Nothing found</p>}
      <ul className="list-group">
        {items.map((i, index) => (
          <li
            className={
              curr === index ? "list-group-item active" : "list-group-item"
            }
            key={i}
            onClick={() => {
              setCurr(index);
              onSelectItem(i);
            }}
          >
            {i}
          </li>
        ))}
      </ul>
    </>
  );
}
interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}
//      {onClose && <Alert onClose={onClose}>This is an alert</Alert>}
// above to be inserted between ul and <>

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="ale"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default ListGroup;
