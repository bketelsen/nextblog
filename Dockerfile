FROM bketelsen/bkml
# API SERVER - Deploy to FLY

# Server port to listen
ENV PORT 8080
COPY data /data
COPY public/static /data/static
WORKDIR /data
# Drop privileges for non-UID mapped environments
USER nobody
# Run the entrypoint command by default when the container starts.
ENTRYPOINT ["/usr/local/bin/bkml"]

# Expose the server TCP port
EXPOSE ${PORT}
CMD ["serve"]
