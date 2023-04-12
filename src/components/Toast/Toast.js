import React, { useEffect, useState } from "react";
import "./Toast.css";
const Toast = (props) => {
  const { toastList, position } = props;
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList(toastList);
  }, [toastList, list]);
  return list.map((toast, i) => (
    <div className="notification toast">
      <button>X</button>
      <div className="notification-image">
        <img src={toast.icon} alt="" />
      </div>
      <div>
        <p className="notification-title">{toast.title}</p>
        <p className="notification-message">{toast.description}</p>
      </div>
    </div>
  ));
};
export default Toast;
