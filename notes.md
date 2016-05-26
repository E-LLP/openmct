MCT.conductor.bounds.outer.start.value()
                                .mode()
                          .end.value()
                                .mode()
                          .listen()
                          .type();
MCT.conductor.bounds.inner.start.value()
                                .mode()
                          .end.value()
                                .mode()
                          .listen()
                          .type();

Questions
1. Do we need listeners on outer and inner, or just one listener on bounds? or on conductor?
2. Do controllers need to listen to mode changes?

Plan
1. Start from use cases. Establish use-cases, then write the client code that interfaces with the TC. how would I want to do this?

Use Cases
1. View Controller updated when user changes bounds
2. View controller updated on tick
3. Session is loaded and needs to set bounds on time conductor
4. Conductor controller needs to update bounds, mode on TC when user changes bounds
5. User switches mode to/from follow time


### Use Case 1

function updateBounds(bounds) {
    var start = bounds.start.value(),
        end = bounds.end.value();
    
    plot.setBounds(start, end);
    plot.setXAxisType(bounds.timeSystem());
    
}

MCT.conductor.bounds.listen(updateBounds);



Notes
1. Doesn't matter how it's namespaced in the 1.0 API for now? For interim could expose it via a service that can be injected into controllers etc.
