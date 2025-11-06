// What useTransition Is

// useTransition is a React concurrent feature (introduced in React 18) 
// that helps manage non-urgent state updates — it lets you defer expensive 
// or slow UI transitions so that urgent updates (like typing, clicks) remain responsive.

// const [isPending, startTransition] = useTransition();
// startTransition(callback) → wraps the state update you want React 
// to handle with lower priority.
// isPending → boolean flag that tells you if the transition is 
// still in progress (useful to show spinners or skeletons).