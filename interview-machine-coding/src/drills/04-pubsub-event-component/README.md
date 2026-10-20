# 04. Pub/Sub Vanilla Integration (Day 9)

> **Category**: Machine Coding Drill  
> **Target Companies**: Atlassian, GitLab, Netflix  
> **Time Target**: 45 Minutes  

## Objective
Decouple multi-component communication using an EventEmitter / Pub-Sub event bus.

## Senior Interview Rubric & Requirements
- [ ] Custom EventEmitter singleton with on(), off(), emit(), once() methods
- [ ] Decoupled Publisher component firing custom event payloads
- [ ] Multiple Subscriber components reacting independently to published events
- [ ] Automatic unsubscription on component unmount to prevent memory leaks
- [ ] Event log timeline visualizer

## Practice Guide
1. Start the countdown timer in the top header.
2. Write your implementation inside `PubsubEventComponentDrill.tsx`.
3. Test all edge cases and keyboard interactions.
4. Check off each requirement as you finish.
