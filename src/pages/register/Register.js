import React, { useContext, useState } from "react";

import "./style.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../..";
import { toast } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { loading, setLoading, setIsAuthenticated } = useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const { data } = await axios.post(
        "https://nodejs-classnotes.onrender.com/api/users/register",
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data?.message);
      setIsAuthenticated(true);
      setLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
      setIsAuthenticated(false);
      setLoading(false);
    }
  };

  return (
    <div className="register">
      <section>
        <div className="registerBody">
          <form onSubmit={submitHandler}>
            <div className="loginTitle">REGISTER</div>
            <div className="detailSection">
              <label className="name">Name :</label>
              <input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="name"
                required
              />
              <label className="email">Email :</label>
              <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                required
              />
              <label className="password">Password :</label>
              <input
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
            </div>
            <div className="loginButton">
              <button disabled={loading} type="submit">
                SUBMIT
              </button>
              <div className="or">OR</div>
              <div className="pageChange" onClick={() => navigate("/login")}>
                LOGIN
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
