# Sh_are

**Sh_are** This crowdfunding platform concept.


## Setup and Installation
Follow these steps to set up **Sh_are** on your local environment:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/daniyarsan/sh_are.git
   cd sh_are
   ```

2. **Set Up Environment Variables**:
   - Copy the example environment file:
     ```bash
     cp .env.example .env
     ```
   - Update the `.env` file with your database credentials and other configuration settings.

3. **Install PHP Dependencies**:
   ```bash
   make start
   ```

4. **Install Node.js Dependencies**:
   ```bash
   docker-compose exec app php artisan app:refresh
   ```

5. **Compile Assets**:
   ```bash
   make vite_install
   ```

8. **Access the Project**:
   Open your browser and navigate to `http://localhost:8001`.
##
