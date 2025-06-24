## TODO / What’s left to do

This is a demo app showcasing comments with highlights on an image. Below is a list of remaining features and improvements planned for production-ready quality:

### Features to implement

- [ ] **Mock Backend**:  
       Implement mock API endpoints (e.g., using MSW) to simulate saving and fetching comments from a server or write it in Express/Nest

- [ ] **End-to-End Tests**:  
       Add basic Playwright e2e tests for happy paths such as adding comments, adding replies, and viewing comments panel.

### Code quality and production considerations

- [ ] Use Mantine design system fully for styling instead of some inline styles.
- [ ] Add input validation and error handling in forms using useHookForm.
- [ ] Add security measures such as sanitizing user inputs.
- [ ] Optimize performance by memoization and preventing unnecessary renders.
- [ ] Write unit and integration tests for core components and hooks.

---

This project is meant as a demo and can be extended to production readiness with the above improvements.
