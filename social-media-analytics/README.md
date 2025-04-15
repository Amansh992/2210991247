# Social Media Analytics Microservice

Aggregates analytics data from the test server for social media platforms.

## Setup
1. Install Node.js and npm.
2. Clone the repository and navigate to `social-media-analytics`.
3. Run `npm install`.
4. Create `.env` with:
   PORT=3002
   TEST_SERVER_URL=http://20.244.56.144/test
   ACCESS_TOKEN=<your-access-token>
5. Run `npm start` or `npm run dev` for development.

## Endpoints
- **GET /analytics/:platform**: Fetches analytics for platform (facebook, twitter, linkedin, instagram).
- Example: `http://localhost:3002/analytics/facebook`
