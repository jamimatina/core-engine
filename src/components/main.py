import os
from core_engine.config import Config
from core_engine.utils import Utilities

def main():
    config = Config()
    utilities = Utilities()

    if not config.is_config_valid():
        print("Invalid configuration. Exiting.")
        return

    try:
        # Perform some critical operation
        result = utilities.perform_critical_operation()
        print(f"Critical operation result: {result}")
    except Exception as e:
        print(f"An error occurred: {e}")
        return

    if not config.is_database_connected():
        print("Failed to connect to database. Exiting.")
        return

    try:
        # Perform some database operation
        result = utilities.perform_database_operation()
        print(f"Database operation result: {result}")
    except Exception as e:
        print(f"An error occurred: {e}")
        return

if __name__ == "__main__":
    main()