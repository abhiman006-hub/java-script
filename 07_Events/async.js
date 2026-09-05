/*
    #javascript:
            => synchronous (one after another execution)
            => single threaded

    # Execution Context
                => execute one line of code at a time
                => each operation waits for the last
                   one to complete before execution



                  #synchronous--->blocking code
                                ==>stop further execution before completing the current task

                  #asynchronous--->No Blocking code
                                ==>execute futher if the current task takes more time


                                            ┌──────────────────────────────────────┐
                         │              Web API                 │
                         │                                      │
                         │              DOM API                 │
                         │                                      │
                         │   setTimeout ───────────────┐        │
                         │   setInterval               │        │
                         │                             ↓        │
                         │                           ┌───────┐  │
                         │                           │Register│  │
                         │                           │Callback│  │
                         │                           └───────┘  │
                         │                                      │
                         │        ┌────────┐                    │
                         │        │fetch() │                    │
                         │        └────────┘                    │
                         │             │                        │
                         └─────────────│────────────────────────┘
                                       │
                                     Promise
                                       ↓
                              ┌─────────────────┐
                              │ Microtask Queue │
                              │   ┌───┐  ┌───┐  │
                              │   │CB │  │CB │  │
                              │   └───┘  └───┘  │
                              └────────┬────────┘
                                       │
                                  High Priority
                                       │
                                       ↓
        ┌─────────────────────────────────────────────────────┐
        │                    JS Engine                        │
        │                                                     │
        │  ┌─────────────┐        ┌──────────────────────┐    │
        │  │  Memory     │        │      CALL STACK      │    │
        │  │    Heap     │        │                      │    │
        │  │             │        │  ┌──────────────┐    │    │
        │  │             │        │  │      fn      │    │    │
        │  │             │        │  ├──────────────┤    │    │
        │  │             │        │  │      fn      │    │    │
        │  │             │        │  ├──────────────┤    │    │
        │  │             │        │  │      fn      │    │    │
        │  │             │        │  ├──────────────┤    │    │
        │  │             │        │  │    Global    │    │    │
        │  │             │        │  └──────────────┘    │    │
        │  └─────────────┘        └──────────────────────┘    │
        │                                      ↑              │
        └──────────────────────────────────────│──────────────┘
                                               │
                                          Add to Call Stack
                                               │
                                               ↑
                                      ┌──────────────────┐
                                      │    Event Loop    │
                                      └────────┬─────────┘
                                               ↑
                                      ┌──────────────────┐
                                      │    Task Queue    │
                                      │   ┌────┐  ┌────┐ │
                                      │   │ CB │  │ CB │ │
                                      │   └────┘  └────┘ │
                                      └──────────────────┘



*/