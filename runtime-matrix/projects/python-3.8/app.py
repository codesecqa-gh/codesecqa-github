def main():
    # SAST test: hardcoded secret (should be flagged)
    secret = "my_aws_secret_key"
    print("Hello, world!")

if __name__ == "__main__":
    main()