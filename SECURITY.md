# Security Policy

## Supported versions

Only the latest version on the `main` branch (deployed at [reminisce-brown.vercel.app](https://reminisce-brown.vercel.app/)) receives security fixes.

## Reporting a vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, report them privately using [GitHub's private vulnerability reporting](https://github.com/harry0x/reminisce/security/advisories/new).

Please include:

- A description of the issue and its impact
- Steps to reproduce, or a proof of concept
- Any suggested fix, if you have one

You can expect an initial response within a few days. Once the issue is confirmed, we'll work on a fix and credit you in the release notes unless you prefer to stay anonymous.

## Scope

Reminisce runs entirely in the browser. Uploaded photos are processed locally and are not sent to a server. Relevant reports include, for example, XSS through image metadata or captions, or vulnerable dependencies.
