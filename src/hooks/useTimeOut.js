/*The requirements were: if delay changes, create a new setTimeout. If a new callback is passed in,
don't cause a re-trigger.

The forcing a renewal of a setTimeout when delay is changed is straightforward -
just pass it in as the useEffect dependency array - once delay is changed,
useEffect will clear out by old timeout by calling the return function of the useEffect and
then create a new instance of setTimeout with the new delay.

For the second part of the problem where when a new callback is passed in,
we should not create a new instance of setTimeout.
We can't add it into the dependency array of the useEffect
since it'll re-trigger but it we don't add it and callback is updated, 
it will end up not running the code in the useEffect since it references the old callback...

So we need to use something that will persist between re-renders.
That's where useRef comes in. useRef is generally great for storing values
and persisting them across renders.
It comes in handy here because, once a new callback is passed in,
it will force a re-render (but not for the useEffect since only changes to the dep-array will trigger a rerun)
- the re-render updates out callbackRef's current value to the new callback,
 and then since the useRef/callbackRef acts as a singleton,
  when setTImeout gets called, it references the new callbackRef.current function.
*/
import React, { useEffect, useRef } from "react";

export function useTimeout(callback: () => void, delay: number) {
  const callbackRef = useRef();
  callbackRef.current = callback;

  useEffect(() => {
    const id = setTimeout(() => callbackRef.current(), delay);
    return () => clearTimeout(id);
  }, [delay]);
}
