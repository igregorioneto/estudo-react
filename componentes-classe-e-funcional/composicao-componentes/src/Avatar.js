import React from 'react'

const styles = {
  root: {
    margin: '1vw'
  },
  avatar: {
    width: 50,
    borderRadius: '50%',
    padding: 5,
    boxShadow: '0px 5px 25px 0px rgba(0,0,0,0.5)'
  }
}

const Avatar = ({ url }) => {
  return (
    <div style={styles.root}>
      <img src={url} alt="Avatar" style={styles.avatar} />
    </div>
  )
}

export default Avatar;
