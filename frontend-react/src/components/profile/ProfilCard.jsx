import React from 'react'

const ProfilCard = () => {
  return <>
   <div className="profile-card">
            <div className="avatar-wrapper">
              <div className="avatar">AA</div>
              <button className="avatar-btn">
                <i class="fa-regular fa-camera"></i>
              </button>
            </div>

            <h3 className="profile-name">Ahmed Ali</h3>
            <p className="profile-role">Student</p>

            <div className="profile-stats">
              <div>
                <span>Member Since</span>
                <strong>Jan 2026</strong>
              </div>
              <div>
                <span>Total Orders</span>
                <strong>24</strong>
              </div>
              <div>
                <span>Rating</span>
                <strong class="ratings">
                  <i class="fa-solid fa-star "></i>
                  <span className="rates">4.9</span>
                </strong>
              </div>
            </div>
          </div>
  </>
}

export default ProfilCard