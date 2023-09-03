/* eslint-disable react/prop-types */
import { useAuthStore } from "../hooks/useAuthStore";

export const UserCard = ({u}) => {
    const { user } = useAuthStore();
  return (
    <div
    className={`card m-1 bg-light border border-2 ${
      u.email === user.email ? "border-success" : ""
    }`}
  >
    <div className="text-center">
      <img
        src={u.img}
        className="img-fluid rounded-circle"
        alt={u.name}
      />
    </div>
    <div className="card-body">
      <h5 className="card-title">{u.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{u.email}</h6>
    </div>
  </div>
  )
}
