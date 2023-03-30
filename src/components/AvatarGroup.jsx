import React from "react";

function AvatarGroup({ count, collapsed }) {
  return (
    <div
      className={
        collapsed
          ? "flex items-center -space-x-2"
          : "flex justify-between items-center gap-2 w-4/5"
      }
    >
      {[...Array(count)].map((_, index) => (
        <img
          className={
            collapsed ? "w-6 h-6 border-white border-2 rounded-full" : "w-6 h-6 rounded-full"
          }
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
          key={index}
        />
      ))}
    </div>
  );
}

export default AvatarGroup;
