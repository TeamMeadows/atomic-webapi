import { useEffect, useState } from "react";
import { listen, unlisten, getUsername, getHealth } from "@teammeadows/atomicapi";

interface HPChangeEvent {
  health: number
}

export function UserProfile() {
  const [username, setUsername] = useState("");
  const [health, setHealth] = useState(0);

  // async function that will be fetch username from garry's mod
  const fetchUsername = async () => {
    // call garry's mod function "getUsername"
    setUsername(await getUsername());
    // call garry's mod function "getHealth"
    setHealth(await getHealth());
  }

  useEffect(() => {
    // add garry's mod event "hpChange" listener
    const hpListener = listen<HPChangeEvent>("onHealthChange", event => setHealth(event.health));

    // start async fetching
    fetchUsername();

    // remove "hpChange" listener on component unmount
    return () => unlisten(hpListener);
  }, [])

  return (
    <div className="flex flex-col">
      <span>{username}</span>
      <span>HP {health}%</span>
    </div>
  )
}