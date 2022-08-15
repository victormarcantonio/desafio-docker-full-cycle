FROM golang:1.18 AS builder

WORKDIR /app

# pre-copy/cache go.mod for pre-downloading dependencies and only redownloading them in subsequent builds if they change
COPY go.mod ./
RUN go mod download && go mod verify

COPY . .
RUN GOOS=linux go build ./hello.go

CMD ["app"]

FROM scratch

WORKDIR /app

COPY --from=builder /app/hello .

CMD ["/app/hello"]